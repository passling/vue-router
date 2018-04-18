
  const site = localStorage.getItem("site");
  if(site == null) {
    var logins=false

  }else{
    var logins=true
  }


const state = {
  sesstion: logins
}
export default state
