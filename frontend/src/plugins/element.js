import Vue from 'vue'
import { Button, Form, FormItem, Input, Container, Header, Aside, Main, 
    Menu, Submenu, MenuItemGroup, MenuItem, Row, Col, Avatar, Tabs, TabPane,
    Card, Dropdown, DropdownMenu,DropdownItem, Table, TableColumn, Popconfirm,
    Upload, Tooltip, Dialog, MessageBox, Message , Divider, Select, Option,
    Drawer, Popover, Badge, Image ,DatePicker} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Avatar)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)
Vue.use(Popconfirm)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Divider)
Vue.use(Select)
Vue.use(Option)
Vue.use(Drawer)
Vue.use(Popover)
Vue.use(Badge)
Vue.use(Image)
Vue.use(DatePicker)

//全局挂载
Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$alert=MessageBox.alert
