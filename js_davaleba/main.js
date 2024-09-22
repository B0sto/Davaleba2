let passwords = [];

passwords.push("PASS", "PASSWORD", "PASSSSSWORD")

for (let i = 0; i < passwords.length; i++) {
    passwords[i] = passwords[i].toLowerCase()
    console.log(passwords[i]);

    let passCheck = (passwords[i].length >= 8) ? "Strong Password" : "Weak Password"
    console.log(passCheck);

    let count = 0
    for (let j = 1; j < passwords[i].length + 1; j++) {
        count += 1
        
        
    }
    console.log(`${count} Letters`);
        
}

passwords.shift()
console.log(passwords);

passwords.unshift("NewPassword")
console.log(passwords);
