import Vue from 'vue'
import {
  Button,
  Row,
  Col,
  Message,
  Loading,
  Tabs,
  TabPane,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Upload,
  Table,
  TableColumn,
  DatePicker,
  Pagination,
  Form,
  FormItem,
  Input,
  Option,
  OptionGroup,
  Switch,
  Select,
  MessageBox,
  Dialog,
  Radio,
  RadioGroup,
  RadioButton,
  Progress,
  checkbox,
  CheckboxButton,
  CheckboxGroup,
  Tree,
  Badge,
  Collapse,
  Popover,
  Notification,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Container,
  Header,
  Aside,
  Main,
  cascader,
  Steps,
  Step,
} from 'element-ui'
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
// Vue.use(Message)//需要加入博客
Vue.use(Loading)

Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Switch);
Vue.use(Select);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Progress);
Vue.use(checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Tree)
Vue.use(Collapse)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tooltip);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(cascader)
Vue.component(Message)
Vue.prototype.$message = Message //需要加入博客
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$notify = Notification;
Vue.prototype.$prompt = MessageBox.prompt;
