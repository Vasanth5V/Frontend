const data= [{
    "name": "Alice",
    "age": 29,
    "dateOfBirth": "15 Feb 1995",
    "mobileNumber": "9876543210"
  },
  {
    "name": "Bob",
    "age": 34,
    "dateOfBirth": "22 Mar 1989",
    "mobileNumber": "8765432109"
  },
  {
    "name": "Carol",
    "age": 27,
    "dateOfBirth": "5 Apr 1996",
    "mobileNumber": "7654321098"
  },
  {
    "name": "Dave",
    "age": 31,
    "dateOfBirth": "12 May 1993",
    "mobileNumber": "6543210987"
  },
  {
    "name": "Eve",
    "age": 26,
    "dateOfBirth": "8 Jun 1997",
    "mobileNumber": "5432109876"
  },
  {
    "name": "Frank",
    "age": 40,
    "dateOfBirth": "20 Jul 1983",
    "mobileNumber": "4321098765"
  },{
    "name": "Arol",
    "age": 27,
    "dateOfBirth": "5 Apr 1996",
    "mobileNumber": "7654321098"
  },
  {
    "name": "Ave",
    "age": 31,
    "dateOfBirth": "12 May 1993",
    "mobileNumber": "6543210987"
  },
  {
    "name": "Bilve",
    "age": 26,
    "dateOfBirth": "8 Jun 1997",
    "mobileNumber": "5432109876"
  },
  {
    "name": "Ceank",
    "age": 40,
    "dateOfBirth": "20 Jul 1983",
    "mobileNumber": "4321098765"
  }]
const tBody=document.getElementById("dataTable");
for(let i=0;i<data.length;i++)
{
   const element=data[i];
   let tableRow=document.createElement('tr');
   let name=document.createElement("td");

   name.textContent=element.name;
   tableRow.appendChild(name);
   let age=document.createElement("td");

   age.textContent=element.age;
   tableRow.appendChild(age);
   let dateOfBirth=document.createElement("td");

   dateOfBirth.textContent=element.dateOfBirth;
   tableRow.appendChild(dateOfBirth);
   let mobileNumber=document.createElement("td");

   mobileNumber.textContent=element.mobileNumber;
   tableRow.appendChild(mobileNumber);
   tBody.appendChild(tableRow);

}