<template>
  <el-button type="primary" class="Back" @click="$router.push('/')"
    ><i class="fa-solid fa-hand-back-point-left"></i>חזור</el-button
  >

  <div>
    <div class="Form" dir="rtl">
      <div v-if="type === 'Normal'">
        <div class="Form-Normal">
          <div class="rowA">
            <inp v-model="FormNormal.Name" :place="'שם האתר'" />
            <inp
              v-model="FormNormal.UserName"
              :place="'שם משתמש'"
              style="margin-right: 70px"
            />
          </div>
          <div class="rowB">
            <inp
              v-model="FormNormal.password"
              :place="'ססמא'"
              style="margin-top: 30px"
            />
            <inp
              v-model="FormNormal.URL"
              :place="'URL'"
              type="Nortl"
              style="margin-top: 30px; margin-right: 70px"
            />
          </div>
          <div class="Halemata">
            <el-divider />
            <el-button type="primary" @click="Update_Form(FormNormal)"
              >עדכן<i class="fa-regular fa-pen-to-square"></i
            ></el-button>
          </div>
        </div>
      </div>
      <div v-else-if="type === 'Token'">
        <div class="Form-Token">
          <el-row>
            <el-col :span="12">
              <inp :place="'שם האתר'" v-model="FormToken.Name" />
            </el-col>
            <el-col :span="12">
              <inp :place="'טוקן'" v-model="FormToken.Token" />
            </el-col>
            <el-col :span="12" style="margin-top: 30px">
              <inp type="Nortl" :place="'URL'" v-model="FormToken.URL" />
            </el-col>
          </el-row>
          <div class="Halemata">
            <el-divider />
            <el-button type="primary" @click="Update_Form(FormToken)"
              >עדכן<i class="fa-regular fa-pen-to-square"></i
            ></el-button>
          </div>
        </div>
      </div>
      <div v-else-if="type === 'Stam'">
        <div class="Form-Stam">
          <el-row>
            <el-col :span="12"
              ><inp :place="'שם האתר'" v-model="FormStam.Name"
            /></el-col>
            <el-col :span="12"
              ><inp type="Nortl" :place="'URL'" v-model="FormStam.URL"
            /></el-col>
          </el-row>
          <div class="Halemata">
            <el-divider />
            <el-button type="primary" @click="Update_Form(FormStam)"
              >עדכן<i class="fa-regular fa-pen-to-square"></i
            ></el-button>
          </div>
        </div>
      </div>
    </div>
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
import inp from "@/components/InptutComp.vue";
import axios from "axios";

export default {
  components: {
    inp,
  },

  setup() {
    // !^*   ^Setting^
    const store = useStore();
    const Route = useRoute();
    // !^*   ^Setting^
    // $ Life Sycle:
    // const allData = ref(data.value);
    // $ Vars:
    const id = ref(Route.params.id);
    const type = ref("");
    const FormNormal = reactive({});
    const FormToken = reactive({});
    const FormStam = reactive({});
    const { data, isFinished } = useAxios(
      "https://server-pass-404f2e7b3bdf.herokuapp.com/" + "FindItem/" + id.value
    );

    // $ Methods:
    const Intervalo = setInterval(() => {
      if (isFinished.value) {
        clearInterval(Intervalo);
        type.value = data.value.type;
        switch (type.value) {
          case "Normal":
            console.log(FormNormal);
            for (const key in data.value) {
              FormNormal[key] = data.value[key];
            }
            // FormNormal = data.value;
            break;
          case "Token":
            for (const key in data.value) {
              FormToken[key] = data.value[key];
            }

            // FormToken = data.value;
            break;
          case "Stam":
            for (const key in data.value) {
              FormStam[key] = data.value[key];
            }

            // FormStam = data.value;
            break;
        }
      }
    }, 0);
    // $Computeds:
    // $ Whatchs:
    return { id, type, FormNormal, FormToken, FormStam };
  },
  methods: {
    async Update_Form(form) {
      //   console.log( form );
      let { data } = await axios.put(
        "https://server-pass-404f2e7b3bdf.herokuapp.com/" + "PutData",
        form
      );
      if (data) {
        this.$store.commit("UP_DATA", data);
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin BoxAnido {
  border: 3px solid black;
  width: 600px;
  height: 15em;
  padding: 15px;
}

.Form {
  position: absolute;
  left: 28%;
  top: 200px;
  .Form-Normal {
    @include BoxAnido;
    .rowA {
      display: flex;
      flex-direction: row;
      margin: 20px;
    }
    .rowB {
      display: flex;
      flex-direction: row;
      margin: 20px;
    }
  }
  .Form-Token {
    @include BoxAnido;
    .el-row {
      margin: 20px;
    }
  }
  .Form-Stam {
    @include BoxAnido;
    .el-row {
      margin: 20px;
    }
  }
  .Halemata {
    position: absolute;
    bottom: 10px;
    .el-divider {
      width: 850%;
    }
  }
}
</style>
