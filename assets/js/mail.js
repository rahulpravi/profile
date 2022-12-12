$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwpbLLzFXMOkqr2D8CbPEcpJNyvVUGiI3GqIiNFR70sDdLadZXFJLB4MiULz0-KXLrW/exec",
        url:"",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Your message has been sent. Thank you!")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})