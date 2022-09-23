class Movie{
    constructor(title,studio,ratings="PG"){
        this.title=title;                   
        this.studio=studio;
        this.ratings=ratings;
    }
    getPg(myArr){
        var t=[];
        for(let i=0;i<myArr.length;i++){
            if (myArr[i].ratings=="PG") {
                t.push(myArr[i])
            }
        }
        return t;
    }
    
    
}

// a)

let Beast=new Movie("Beast","Sun pictures","PG13")

let valimai=new Movie("valimai","Zee studios","PG13")
console.log(Beast);
console.log(valimai);


//b)

let cobra=new Movie("cobra","Sun pictures");
console.log(cobra);


//c)
  var newArr=[];
  newArr.push(cobra);
  newArr.push(Beast);
  newArr.push(valimai);
  let res=cobra.getPg(newArr);
  console.log(res)


//d)
let vtk=new Movie("vtk","Vels Production","PG13");
console.log(vtk);






