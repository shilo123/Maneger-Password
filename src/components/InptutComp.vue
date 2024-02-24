<template>
  <div class="group" :dir="type === 'Nortl' ? 'auto' : 'rtl'">
    <input type="text" class="input" :value="modelValue" @input="EmitValue" />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{{ place }}</label>
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
export default {
  props: ["modelValue", "place", "type"],
  setup(props, { emit }) {
    // !^*   Setting:
    // !^*   ^Setting^
    // $ Life Sycle:

    // $ Vars:
    const Val = ref(props.modelValue);
    // $ Methods:
    const EmitValue = (e) => {
      emit("Update:modelValue", e.target.value);
    };
    // $Computeds:
    // $ Whatchs:
    watchEffect(() => {
      Val.value = props.modelValue;
    });

    //
    return { EmitValue };
  },
};
</script>
<style lang="scss" scoped>
.group {
  position: relative;
  margin: 10px;
  width: 200px;
}

.input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  // width: 200px;
  width: 186px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  right: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input:focus ~ label,
.input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

.bar {
  position: relative;
  display: block;
  width: 200px;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

.input:focus ~ .bar:before,
.input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }

  to {
    width: 0;
    background: transparent;
  }
}
</style>
