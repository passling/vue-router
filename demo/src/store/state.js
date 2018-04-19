
  const site = localStorage.getItem("site");
  if(site == null) {
    var logins=false

  }else{
    var logins=true
  }

console.log(logins+'1')
const state = {
  sesstion: logins
}
export default state
