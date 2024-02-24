<template>
  <div>
    <el-row>
      <el-col
        :span="6"
        v-for="({ Name, UserName, password, URL, type, id }, i) in data"
        :key="i"
        v-show="type === 'Normal'"
      >
        <div class="box">
          <div class="Type">אתר רגיל</div>
          <div class="Name">
            <h1>{{ Name }}</h1>
          </div>
          <div class="container_k_v">
            <div class="key"><span class="label">שם משתמש:</span></div>
            <div class="value">
              <div class="text">
                {{ UserName }}
              </div>
            </div>
            <i class="fa-light fa-copy IconCopy" @click="Copy(UserName)"></i>
          </div>

          <div class="container_k_v">
            <div class="key"><span class="label">ססמא:</span></div>
            <div class="value">
              <span class="text">
                {{ password }}
              </span>
            </div>
            <i class="fa-light fa-copy IconCopy" @click="Copy(password)"></i>
          </div>
          <div class="container_k_v">
            <div class="key"><span class="label">כתובת:</span></div>
            <a class="value" :href="URL"
              ><span class="text">{{ URL }}</span></a
            >
            <i class="fa-light fa-copy IconCopy" @click="Copy(URL)"></i>
          </div>
          <div class="buttons">
            <button class="edit-button" @click="$router.push(`/Edit/${id}`)">
              עריכה
            </button>
            <el-popconfirm
              width="220"
              confirm-button-text="כן"
              cancel-button-text="לא, תודה"
              icon-color="#626AEF"
              title="אתה בטוח שאתה רוצה למחוק?"
              @confirm="DeleteAtar(id)"
            >
              <template #reference>
                <button class="delete-button">מחיקה</button>
              </template>
            </el-popconfirm>
          </div>
        </div>
      </el-col>
      <el-col
        :span="6"
        v-for="({ Name, URL, type, Token, id }, i) in data"
        :key="i"
        v-show="type === 'Token'"
      >
        <div class="box">
          <div class="Type">טוקן</div>
          <h1>{{ Name }}</h1>
          <div class="container_k_v">
            <div class="key"><span class="label">טוקן:</span></div>
            <div class="value">
              <span class="text">{{ Token }}</span>
              <i class="fa-light fa-copy IconCopy" @click="Copy(Token)"></i>
            </div>
          </div>
          <div class="container_k_v" v-if="URL">
            <div class="key"><span class="label">כתובת:</span></div>
            <a class="value" :href="URL"
              ><span class="text">{{ URL }}</span></a
            >
            <i class="fa-light fa-copy IconCopy" @click="Copy(URL)"></i>
          </div>
          <div class="buttons">
            <button class="edit-button" @click="$router.push(`/Edit/${id}`)">
              עריכה
            </button>
            <el-popconfirm
              width="220"
              confirm-button-text="כן"
              cancel-button-text="לא, תודה"
              icon-color="#626AEF"
              title="אתה בטוח שאתה רוצה למחוק?"
              @confirm="DeleteAtar(id)"
            >
              <template #reference>
                <button class="delete-button">מחיקה</button>
              </template>
            </el-popconfirm>
          </div>
        </div>
      </el-col>
      <el-col
        :span="6"
        v-for="({ Name, URL, type, id }, i) in data"
        :key="i"
        v-show="type === 'Stam'"
      >
        <div class="box">
          <div class="Type">סתם אתר לשמור</div>
          <div class="Name">
            <h1>{{ Name }}</h1>
          </div>
          <div class="container_k_v" v-if="URL">
            <div class="key">
              <span class="label">כתובת:</span>
            </div>
            <a class="value" :href="URL"
              ><span class="text">{{ URL }}</span></a
            >
            <i class="fa-light fa-copy IconCopy" @click="Copy(URL)"></i>
          </div>
          <div class="buttons">
            <button class="edit-button" @click="$router.push(`/Edit/${id}`)">
              עריכה
            </button>
            <el-popconfirm
              width="220"
              confirm-button-text="כן"
              cancel-button-text="לא, תודה"
              icon-color="#626AEF"
              title="אתה בטוח שאתה רוצה למחוק?"
              @confirm="DeleteAtar(id)"
            >
              <template #reference>
                <button class="delete-button">מחיקה</button>
              </template>
            </el-popconfirm>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {
  computed,
  inject,
  onMounted,
  reactive,
  ref,
  watch,
  watchEffect,
  useMouse,
  useStore,
  useRoute,
  useAxios,
} from "@/ImportAll";
import axios from "axios";
import { ElMessage } from "element-plus";

export default {
  setup() {
    // !^*   Setting:
    const Store = useStore();

    // !^*   ^Setting^
    // $ Life Sycle:
    // const allData = ref(data.value);
    onMounted(() => {
      //   console.log(data);
    });
    // $ Vars:

    // $ Methods:

    // $Computeds:
    const data = computed(() => {
      return Store.state.data;
    });
    // $ Whatchs:
    return { data };
  },
  methods: {
    async DeleteAtar(id) {
      let { data } = await axios.delete(
        "http://localhost:3006/" + "Delete/" + id
      );
      if (data) {
        this.$store.commit("UP_DATA", data);
      }
    },
    async Copy(text) {
      await navigator.clipboard.writeText(text);
      ElMessage.success("הטקסט הועתק");
    },
  },
};
</script>
<style lang="scss" scoped>
$key-color: #333;
$value-color: #666;
$border-color: #ddd;
$button-color: #007bff;

.HadVarim {
  margin: 10px;
  .box {
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    // width: 400px;
    width: 300px;
    margin: 20px auto;
    height: 400px;
    padding: 20px;
    border: 1px solid $border-color;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    h1 {
      position: absolute;
      top: 30px;
    }
    .Type {
      position: absolute;
      top: 0;
      right: 0;
      margin: 13px;
    }
    .container_k_v {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid $border-color;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      position: relative;
      .key {
        font-weight: bold;
        margin-right: 10px;
        color: $key-color;

        .label {
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
        }
        .URLToken {
          position: relative;
          background: #000;
        }
      }

      .value {
        color: $value-color;
        margin-right: 10px;
        overflow: hidden;
        white-space: nowrap;
        z-index: 1;
        width: 70%;
        .text {
          display: block;
          font-size: 14px;
        }
      }
      .IconCopy {
        position: absolute;
        left: 10px;
        top: 10px;
        padding: 6px;
        border-radius: 10px;
        z-index: 2;
        background: rgba(212, 219, 255, 0.366);
        &:hover {
          background: rgb(122, 122, 122);
          cursor: pointer;
          color: blue;
        }
      }
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 20px;

      .edit-button,
      .delete-button {
        margin: 0 5px;
        padding: 5px 10px;
        font-size: 16px;
        border: 1px solid $button-color;
        border-radius: 5px;
        color: #fff;
        background-color: $button-color;
        cursor: pointer;

        &:hover {
          background-color: #0069d9;
        }
      }
    }
  }
}
// $ עיצוב סרגל הגלילה
::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
//
</style>
