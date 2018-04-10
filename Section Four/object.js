// var course = new Object();

// course.title = " JavaScript Course ";
// course.author = " Yaseen  Alkhafaji ";
// course.views = 0;
// course.version = 1


// console.log(course);

//---------------------------------------------//

//Or we can create an Object like this :

// var course = {
//     title: ' JavaScript Course ',
//     author: ' Yaseen  Alkhafaji ',
//     views: 0,
//     version: 1,
//     updateViews : function(){
//         return ++course.views;
//     }
//     }
    
//     console.log(course.updateViews());
//     console.log(course.updateViews());

function Course(title,author,views,version){
    this.title = title;
    this.author = author;
    this.views = views;
    this.version = version;
    this.updateViews = function() {
        return ++this.views;
    };
    
}    
 var javascript01 = new Course("JavaScript Object Part 1", "Yaseen Alkhafaji", 0, 1);
  var javascript02 = new Course("JavaScript Object Part 2", "Yaseen Alkhafaji", 0, 2);
 console.log(javascript01);
//Note: we can create muyltiple courses using the object constructor    

var courses = [
    new Course("JavaScript Object Part 1", "Yaseen Alkhafaji", 0, 1),
    new Course("JavaScript Object Part 2", "Yaseen Alkhafaji", 0, 2)
    ]
    
    console.log(courses);