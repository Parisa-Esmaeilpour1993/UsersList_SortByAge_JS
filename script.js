
  const user = [];
  
  while (true) {
    const name = prompt("Enter a Name (or type 'finish' to end):");
    
    if (name.toLowerCase() === "finish"){
      break;
    }
    if(!name || !isNaN(name)){
      alert("It's Not a valid name, Try Again!")
      continue
    }
    const age = +prompt("Enter the Age of user:");

    if (!isNaN(age) && Number(age) > 0) {
      user.push({ name, age });
    } else {
      alert("It's Not a valid number, Try Again!");
    }
  }

function sortByAge(user) {
  return user.sort((a, b) => a.age - b.age);
}
const sortedUser = sortByAge(user);
console.log(sortedUser);

let resultMessage = "Sorted Users by Age:\n";

sortedUser.forEach((user, index) => {
  resultMessage += `${index + 1}. Name: ${user.name}, Age: ${user.age}\n`;
});

alert(resultMessage);
