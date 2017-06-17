myModule.service('StudentServices', function() {
    var students = [];

    this.getStudents = function(){
        return students;
    };

    this.insertStudent = function(name,roll,dept,address){
        students.push({name: name,
                      roll: roll,
                      dept: dept,
                      address: address});
    };

    this.deleteSTD = function(name){
      for(var i = students.length -1; i>=0 ;i--){
          if(students[i].name == name){
              students.splice(i,1);
          }
      }
    };
});
