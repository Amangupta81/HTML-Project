function confirmDisplay(){
    var a = confirm("Do you want save Attendance ?");
    if (a == true){
        document.write("Attendance Saved.");
    }
    else
    document.write("Attendance not saved.");
}
function confirmLogout(){
    var a = confirm("Do you want to logout ?");
    if (a == true){
        document.write("Logout Succesful.");
    }
    else
    document.write("User doesnot wants to Logout.");
}