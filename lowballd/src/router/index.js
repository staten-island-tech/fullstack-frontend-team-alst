import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Feed from "../views/Feed.vue";
import Marketplace from "../views/Marketplace.vue";
// import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import ViewProfile from "../views/ViewProfile.vue";
import Product from "../views/Product.vue";
import Chat from "../views/Chat.vue";
import Api from "../views/tokentest.vue";
import PostFeed from "../views/PostFeed.vue";
import Email from "../views/Email.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/feed", name: "Feed", component: Feed },
  { path: "/marketplace", name: "Marketplace", component: Marketplace },
  // { path: "/login", name: "Login", component: Login },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/profiles", name: "ViewProfile", component: ViewProfile },
  { path: "/product", name: "Product", component: Product },
  { path: "/chat", name: "Chat", component: Chat },
  { path: "/token", name: "token", component: Api },
  { path: "/shareoutfit", name: "PostFeed", component: PostFeed },
  { path: "/verfiedemail", name: "Email", component: Email },
  { path: "/contact", name: "Contact", component: Contact },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
