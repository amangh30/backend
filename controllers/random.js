export const random = (req,res)=>{
    var a = Math.random();
    var b=0;
    a= a*100;
    if(a<33.33)
    {
        b=0;
    }
    else if(a<66.67){
        b=1
    }
    else{
        b=2;
    }
    var x = req.body;
    x = x.input;
    if(x==b)
    {
    res.send("draw");
    }
    else if(x==0&&b==2)
    {
        res.send("win")
    }
    else if(x==1&&b==0)
    {
        res.send("win")
    }
    else if(x==2&&b==1)
    {
        res.send("win")
    }
    else if(x==2&&b==0)
    {
        res.send("lost")
    }
    else if(x==1&&b==2)
    {
        res.send("lost")
    }
    else if(x==0&&b==1)
    {
        res.send("lost")
    }
}