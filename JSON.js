
const basicJson = {
    name: "John Doe",
    age: 30,
    profession: "Software Developer",
    skills: ["JavaScript", "Node.js", "React"]
  };
  
  console.log("Basic JSON Object:", basicJson);
  

  const jsonString = '{"name": "Vinay", "age": 21, "profession": "Trainee"}';
  const parsedJson = JSON.parse(jsonString);
  console.log("\nParsed JSON Object:", parsedJson);
  

  const jsonFromObject = JSON.stringify(basicJson, null, 2);
  console.log("\nJSON String from Object:\n", jsonFromObject);
  

  const http = require('http');
  
  const apiServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    const apiResponse = {
      message: "This is a sample API response",
      data: basicJson,
      timestamp: new Date()
    };
  
    res.end(JSON.stringify(apiResponse, null, 2));
  });
  
  apiServer.listen(3000, () => {
    console.log("\nAPI Server running at http://localhost:3000");
    console.log("Make a request to get JSON response.");
  });

  parsedJson.skills = ["Python", "Machine Learning", "AI"];
  console.log("\nUpdated JSON Object:", parsedJson);
  

  const complexJson = {
    person: {
      name: "Vinay",
      contact: {
        email: "Vinay@gmail.com",
        phone: "123-456-7890"
      },
      address: {
        city: "Vizag",
        postalCode: "531173"
      }
    }
  };
  
  console.log("\nAccessing Nested JSON Data:");
  console.log("Name:", complexJson.person.name);
  console.log("Email:", complexJson.person.contact.email);
  console.log("City:", complexJson.person.address.city);
  

  const jsonArray = [
    { id: 1, name: "vinay", age: 21 },
    { id: 2, name: "Bobby", age: 32 },
    { id: 3, name: "Charan", age: 24 }
  ];
  
  console.log("\nArray of JSON Objects:", jsonArray);
  console.log("First Person Name:", jsonArray[0].name);
  