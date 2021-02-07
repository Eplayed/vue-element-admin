/*
 * @Author: zyk
 * @Date: 2020-07-13 14:23:33
 * @Last Modified by: zyk
 * @Last Modified time: 2020-12-25 15:58:23
 */
export default {
  system: {
    name: 'Reusability platform',
  },
  // 按钮
  btn: {
    view: 'View',
    add: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    export: 'Export',
    import: 'Import',
    query: 'Query',
    reset: 'Reset',
    save: 'Save',
    confirm: 'Confirm',
    cancel: 'Cancel',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    transfer: 'Transfer',
    choose: 'Choose File',
    browse: 'Browse',
    download: 'Download the template',
  },
  // form表单占位信息
  placeholder: {
    select: 'Please select',
    all: 'All',
    input: 'Please enter',
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close all',
  },
  // 系统内弹出提示信息
  promptMessage: {
    success: 'The operation succeeds',
    failed: 'The operation failed',
    netErr: 'Network error',
    reqFailed: 'The request failed',
    deleteTip: 'Be sure to delete the selected data',
    handleTip: 'Be sure to continue the current operation',
    deleteTipTitle: 'Tips',
    reload: 'Login information is invalid, please login again',
    OOPS: 'OOPS !',
    headline: 'The webmaster said that you can not enter this page...',
    info: 'Please check that the URL you entered is correct, or click the button below to return to the homepage.',
    goHome: 'Back to home',
    back: 'Back',
    orCan: 'Or you can go :',
    noPer: 'You do not have permission to go to this page',
    unhappy: 'Please contact your leader if you are dissatisfied',
  },
  route: {
    dashboard: 'Dashboard',
    userManagement: 'User management',
    role: 'Role',
    user: 'User',
    permission: 'Permission',
    loginLog: 'Login log',
    systemConf: 'System config',
    dataDictionary: 'Data dictionary',
    changePassword: 'Change Password',
    list: 'List',
    error: 'Error page',
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log out',
    theme: 'Theme',
    size: 'Global size',
    changePassword: 'Change password',
    personal: 'Personal center',
    account: 'Account',
    organisation: 'Organisation',
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo',
  },
  login: {
    title: 'Welcome to Reusability platform',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    nameMsg: 'Please enter the user name',
    pswMsg: 'enter your PIN',
    firstLogin: 'Please change your password the first time you login',
    remPsw: 'Remember me',
    forgetPsw: 'Forgot password',
  },
  userManage: {
    oldPsw: 'Old password',
    newPsw: 'New password',
    confirmPsw: 'Confirm password',
    oldPlace: 'Enter Your Old Password',
    newPlace: 'The format is 8-16 characters and must contain size letters and Numbers',
    confirmPlace: 'Please enter your new password again',
    passwordNotEq: 'The new password is inconsistently entered',
    changeSuccess: 'Password changed successfully, please login again',
    userId: 'User account',
    userName: 'User name',
    organizeName: 'Organize name',
    organizeCode: 'Organize code',
    role: 'Role',
    status: 'Status',
    // 角色管理
    roleId: 'Role id',
    roleName: 'Role name',
    described: 'Described',
    creator: 'Creator',
    creationTime: 'Creation time',
    modifyTime: 'Modify time',
    modifyUser: 'Modify user',
    roleManage: 'Role manage',
    menuManage: 'Menu manage',
    roleRule: 'An uppercase letter or number that must begin with 25 characters or less',
    mobileVilid: 'Please enter the correct cell phone number',
    type: 'Permission types',
    name: 'Permission name',
    attribute: 'Permission attr',
    value: 'Permission value',
    isValid: 'Status',
    // add
    normal: 'Activated',
    invalid: 'Unactivated',
    isDelete: 'Deleted',
    noDelete: 'Not delete',
    operate: 'Operation',
    addPer: 'Add permission',
    addRole: 'Add role',
    typeName: 'Type name',
    email: 'Email',
    idCard: 'ID card',
    mobile: 'Mobile',
    userRoles: 'Subordinate role',
    tel: 'Phone',
    lastLoginTime: 'last_login int',
    frozenTime: 'Freezing time',
    password: 'Password',
    remark: 'Remark',
    baseInfo: 'Basic information',
    roleInfo: 'Role information',
    vilad: 'Only Numbers, letters and underscores can be entered',
    viladEmail: 'Email format error',
    resetpsw: "Make sure to reset the selected user's password",
    // 登录日志
    loginId: 'User ID',
    loginResult: 'Results the login',
    loginStartTime: 'Start time',
    loginEndTime: 'End time',
    userAgent: 'User agent information',
    loginTime: 'Log-in time',
    clientType: 'Client type',
    clientIp: 'Client IP',
  },
  systemConf: {
    bizType: 'Biz type',
    bizCode: 'Biz code',
    bizText: 'Biz text',
    description: 'Description',
    seq: 'SEQ',
    strongHints: 'This operation may cause a system exception, please confirm with the system administrator',
  },
  businessGlossary: {
    isValid: 'IsNull',
    yes: 'Y',
    no: 'N',
    fields1: 'Fields1',
    fields2: 'Fields2',
    fields3: 'Fields3',
    fields4: 'Fields4',
    fields5: 'Fields5',
    fields6: 'Fields6',
    fields7: 'Fields7',
    fields8: 'Fields8',
    plinput: 'Please enter city pinyin',
  },
}
