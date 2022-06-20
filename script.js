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

class uber{
    constructor(distance){
        this.distance=distance
    }
    fare(){
            console.log(20*this.distnce)    // here 20 is 20 rupees per Km
    }
   
}

