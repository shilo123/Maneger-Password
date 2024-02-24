<template>
  <el-button type="primary" class="Back" @click="$router.push('/')"
    ><i class="fa-solid fa-hand-back-point-left"></i>חזור</el-button
  >
  <div>
    <div class="All">
      <button
        @click="EditType = 'Token'"
        :class="{ active: EditType === 'Token' && !over }"
        @mouseover="over = true"
        @mouseleave="over = false"
      >
        <span class="circle1"></span>
        <span class="circle2"></span>
        <span class="circle3"></span>
        <span class="circle4"></span>
        <span class="circle5"></span>
        <span class="text">טוקן</span>
      </button>
      <button
        @click="EditType = 'Normal'"
        :class="{ active: EditType === 'Normal' && !over }"
        @mouseover="over = true"
        @mouseleave="over = false"
      >
        <span class="circle1"></span>
        <span class="circle2"></span>
        <span class="circle3"></span>
        <span class="circle4"></span>
        <span class="circle5"></span>
        <span class="text">אתר רגיל</span>
      </button>
      <button
        @click="EditType = 'Stam'"
        :class="{ active: EditType === 'Stam' && !over }"
        @mouseover="over = true"
        @mouseleave="over = false"
      >
        <span class="circle1"></span>
        <span class="circle2"></span>
        <span class="circle3"></span>
        <span class="circle4"></span>
        <span class="circle5"></span>
        <span class="text">סתם אתר</span>
      </button>
    </div>
    <FormEdit :type="EditType" />
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
import FormEdit from "@/components/FormOfAdd.vue";
export default {
  name: "Limudvue3AddAtar",
  components: {
    FormEdit,
  },
  setup() {
    // !^*   Setting:
    const Store = useStore();

    // !^*   ^Setting^
    // $ Life Sycle:
    onMounted(() => {});
    // $ Vars:
    const EditType = ref("");
    const over = ref(false);
    // $ Methods:

    // $Computeds:
    const data = computed(() => {
      return Store.state.data;
    });
    // $ Whatchs:
    return { data, EditType, over };
  },
};
</script>
<style lang="scss" scoped>
.All {
  position: absolute;
  left: 40%;
  top: 70px;
  button {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: white;
    background-color: #171717;
    padding: 1em 2em;
    border: none;
    border-radius: 0.6rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    margin: 10px;
    span:not(:nth-child(6)) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 30px;
      width: 30px;
      background-color: #0c66ed;
      border-radius: 50%;
      transition: 0.6s ease;
    }

    span:nth-child(6) {
      position: relative;
    }

    span:nth-child(1) {
      transform: translate(-3.3em, -4em);
    }

    span:nth-child(2) {
      transform: translate(-6em, 1.3em);
    }

    span:nth-child(3) {
      transform: translate(-0.2em, 1.8em);
    }

    span:nth-child(4) {
      transform: translate(3.5em, 1.4em);
    }

    span:nth-child(5) {
      transform: translate(3.5em, -3.8em);
    }

    &:hover span:not(:nth-child(6)) {
      transform: translate(-50%, -50%) scale(4);
      transition: 1.5s ease;
    }
  }
}
.active {
  background-color: #0c66ed !important;
}
.Back {
  position: absolute;
  left: 0;
  top: 0;
  i {
    margin: 10px;
  }
}
</style>
