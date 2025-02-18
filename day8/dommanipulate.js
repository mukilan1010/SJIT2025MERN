shareCode =async ()=>{
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost("shared the post Successfully")
        },5000);
    })
}

commentCode =async ()=>{
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost("commented the post Successfully")
        },5000);
    })
}

likeCode=()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
        likePost("post liked successfully")
    },5000)
})
}

async function postCode(){
    var post=new Promise((createPost)=>{
        setTimeout(()=>{
            createPost("post created successfully")
        },5000)
    })
    const[pos,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])  //simultaneously after 5 seconds
    console.log(pos) 
    console.log(like)
    console.log(comment) 
    console.log(share)
}
postCode()