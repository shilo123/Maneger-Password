import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
// createApp.use(ElementPlus);
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "../FileTheFontAwemson/css/all.css"; // כולל את כל הסגנונות
import "../FileTheFontAwemson/css/all.min.css"; // כולל את כל הסגנונות
import "../FileTheFontAwemson/css/brands.css"; // כולל את כל האייקונים של המותגים
import "../FileTheFontAwemson/css/brands.min.css"; // כולל את כל האייקונים של המותגים
import "../FileTheFontAwemson/css/fontawesome.min.css"; // הקובץ המרכזי של Font Awesome
import "../FileTheFontAwemson/css/solid.min.css"; // כולל אייקונים בסגנון מלא
import "../FileTheFontAwemson/css/regular.min.css"; // כולל אייקונים בסגנון רגיל
import "../FileTheFontAwemson/css/light.min.css"; // כולל אייקונים בסגנון דק
import "../FileTheFontAwemson/css/thin.min.css"; // כולל אייקונים בסגנון דק מאוד
import "../FileTheFontAwemson/css/duotone.css"; // כולל אייקונים בסגנון דו-גווני
import "../FileTheFontAwemson/css/duotone.min.css"; // כולל אייקונים בסגנון דו-גווני
import "../FileTheFontAwemson/css/v4-shims.min.css"; // עבור תאימות עם גרסה 4
import "../FileTheFontAwemson/css/svg-with-js.min.css"; // עבור שילוב עם JavaScript ו-SVG
import "../FileTheFontAwemson/css/sharp-solid.min.css"; // סגנון נוסף של אייקונים מלאים

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
