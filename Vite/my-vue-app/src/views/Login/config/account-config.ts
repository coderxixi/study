 export const rules={
  name:[
    {required:true,message:'请输入用户名',trigger:'blur'},
    {pattern:/^[a-zA-Z0-9]{5,10}$/,message:'用户名必须是5-10位字母或数字',trigger:'blur'}
  ],
   password:[
    {required:true,message:'请输入密码',trigger:'blur'},
    {pattern:/^[a-zA-Z0-9]{3,10}$/,message:'密码必须是3-10位字母或数字',trigger:'blur'}
  ]
}
  