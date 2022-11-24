var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.prevenDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var body = 'name' + name + '<br/> email: ' + email + '<br/> phone' + phone + '<br/> message' + message;

    Email.send({
            SecureToken: "ac97147c-4a60-4518-8a15-daa1f5408ffa",
            To: 'vichuvishwa004@gmail.com',
            From: email,
            Subject: phone,
            Body: body
        }).then(
            message => alert(message)
        );
    });
