class person{
    constructor(Fullname, Age, Gender, DOB, Address, Pin){
        this.Fullname=Fullname
        this.Age=Age
        this.Gender=Gender
        this.DOB=DOB
        this.Address=Address
        this.Pin=Pin
    }
}
    var Tejas= new person("Tejas Jakkawar", 23, "Male", "10 July 1998", "Pune", "411044")
   


class uber{
    constructor(distance){
        this.distance=distance
    }
    fare(){
            console.log(20*this.distnce)    // here 20 is 20 rupees per Km
    }
   
}

var ride=new uber(20)
