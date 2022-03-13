
export class Todo {

    static fromJson( { id, tarea, completado, creado } ){
        
        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }


    constructor( tarea ){

        this.tarea = tarea;

        this.id         = new Date().getTime(); //muestra la hora con milisegundos esto se tomara como id
        this.completado = false;
        this.creado     = new Date();
    }

    imprimirClases(){

        console.log(`${this.tarea } - ${this.id}`);

    }


}



