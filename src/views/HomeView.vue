<template>
  <!-- <div class="Hosef" @click="Add">הוסף</div> -->
  <button @click="Add">
    <span class="transition"></span>
    <span class="gradient"></span>
    <span class="label">הוסף</span>
  </button>

  <div class="SERCH" dir="rtl">
    <div class="input-wrapper">
      <button class="icon" v-show="focus">
        <i class="fa-sharp fa-solid fa-magnifying-glass fa-xl"></i>
      </button>
      <input
        type="text"
        name="text"
        class="input"
        placeholder="חפש.."
        @focus="focus = true"
        @blur="focus = false"
        v-model="Serch"
        @input="Filter"
      />
    </div>
  </div>
  <div dir="rtl" class="HadVarim">
    <Box v-if="isFinished" class="Boxs" ref="Boxs" />
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
  useRouter,
} from "@/ImportAll";
import Box from "@/components/BoxComp.vue";
// @ is an alias to /src
export default {
  components: {
    Box,
  },
  name: "HomeView",
  setup(props, { emit }) {
    // !^*   Setting:
    const Store = useStore();
    // const Route = useRoute();
    const Router = useRouter();
    const { data, isFinished } = useAxios("http://localhost:3006");
    Store.commit("UP_DATA", data);
    const Boxs = ref(null);

    // !^*   ^Setting^
    // $ Life Sycle:
    // const allData = ref(data.value);
    // $ Vars:
    const focus = ref(false);
    const Serch = ref("");
    // $ Methods:
    const Add = () => {
      Router.push("/addatar");
    };
    // $Computeds:

    // $ Whatchs:
    watch(Serch, (val) => {
      Store.commit("UP_DATA", data);
      Store.commit("FilterData", val);
    });
    return { data, isFinished, Add, focus, Serch, Boxs };
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.Hosef {
  background: #0aff16b5;
  width: 20%;
  padding: 9px;
  text-align: center;
  font-size: 18px;
  transition: all 0.3s;
  // position: absolute;
  // left: 0;
  &:hover {
    background: #0aff166e;
    padding: 11px;
    font-size: 20px;
    cursor: pointer;
  }
}
.Boxs {
  margin-top: 40px;
}
//SERCH:
.SERCH {
  width: 20%;
  position: absolute;
  top: 0;
  right: 40%;
  margin: 5px;
  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
  }

  .input {
    border-style: none;
    height: 10px;
    width: 50px;
    padding: 10px;
    outline: none;
    // border-radius: 50%;
    transition: 0.5s ease-in-out;
    // background-color: #1557c0;
    box-shadow: 0px 0px 3px #1557c0;
    padding-right: 40px;
    color: rgb(0, 0, 0);
    border: none;
    border-bottom: 3px solid #1557c0;
    box-shadow: none;
    background: none;
  }

  .input::placeholder,
  .input {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 17px;
  }

  .input::placeholder {
    color: #979191;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -20px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    outline: none;
    border-style: none;
    border-radius: 50%;
    pointer-events: painted;
    background-color: transparent;
    transition: 0.2s linear;
  }

  .icon:focus ~ .input,
  .input:focus {
    box-shadow: none;
    width: 250px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 3px solid #1557c0;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
}
//Button:
button {
  // font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  //   "Liberation Mono", "Courier New", monospace;
  font-size: 17px;
  padding: 1em 2.7em;
  font-weight: 500;
  background: #85b5f8;
  color: rgb(0, 0, 0);
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 0.6em;
  cursor: pointer;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  // border-radius: 0.6em;
  // margin-top: -0.25em;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3)
  );
}

.label {
  position: relative;
  top: -1px;
}

.transition {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 500ms;
  background-color: rgba(16, 185, 129, 0.6);
  border-radius: 9999px;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

button:hover .transition {
  width: 14em;
  height: 14em;
}

button:active {
  transform: scale(0.97);
}
</style>
