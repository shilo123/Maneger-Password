<template>
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
          <el-button type="primary" @click="Add_Form(FormNormal)"
            >הוסף<i class="fa-sharp fa-solid fa-plus"></i
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
          <el-button type="primary" @click="Add_Form(FormToken)"
            >הוסף<i class="fa-sharp fa-solid fa-plus"></i
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
          <el-button type="primary" @click="Add_Form(FormStam)"
            >הוסף<i class="fa-sharp fa-solid fa-plus"></i
          ></el-button>
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
import inp from "./InptutComp.vue";
import axios from "axios";
export default {
  props: ["type"],
  name: "Limudvue3AddAtar",
  components: {
    inp,
  },
  setup(props) {
    // !^*   Setting:
    const Store = useStore();
    // !^*   ^Setting^
    // $ Life Sycle:

    // $ Vars:
    const FormNormal = reactive({
      Name: "",
      UserName: "",
      password: "",
      URL: "http://",
      type: "Normal",
    });
    const FormToken = reactive({
      Name: "",
      Token: "",
      URL: "http://",
      type: "Token",
    });
    const FormStam = reactive({
      Name: "",
      URL: "http://",
      type: "Stam",
    });
    // $ Methods:

    // $Computeds:
    const data = computed(() => {
      return Store.state.data;
    });
    // $ Whatchs:

    watch(FormNormal, (val) => {
      //   console.log(val);
    });
    return { data, FormNormal, FormToken, FormStam };
  },
  methods: {
    async Add_Form(Form) {
      let { data } = await axios.post(
        "http://localhost:3006/" + "PushItem",
        Form
      );
      if (data) {
        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      } else {
        alert("יש בעיות");
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
