import { toast } from "react-toastify";
import { useToDoStore } from "../store"
import { TodoDetailItem } from "./todoDetailItem"

export const TodoDetails = ({ thing }) => {

    const deleteThing = useToDoStore(state => state.deleteThing)
    const getThingById = useToDoStore(state => state.getThingById)

    const handleClick = () => {
        deleteThing(thing.id)
        toast('Tarea Eliminada', {
            type: "error"
        })
    }

    return (
        <div className=" p-6 m-5 w-full overflow-auto  border rounded-lg shadow-lg ">
         
            <TodoDetailItem
                label='Nombre'
                data={thing.name}
            />

            <TodoDetailItem
                label='Descripción'
                data={thing.task}
            />
            <div className='flex flex-col lg:flex-row gap-3 justify-between mt-10'>
                <button
                type="button"
                className="p-2 font-bold text-white bg-blue-600"
                onClick={() => getThingById(thing.id)}
                >
                    Editar
                </button>

                <button
                type="button"
                className="p-2 font-bold text-white bg-red-700"
                onClick={handleClick}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
