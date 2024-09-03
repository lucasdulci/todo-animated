import { toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { useToDoStore } from "../store"
import { useEffect } from "react"
import { Error } from "./Error"


export const TodoForm = () => {

    const { addThing } = useToDoStore()
    const { activeId } = useToDoStore()
    const { things } = useToDoStore()
    const { updateThing } = useToDoStore()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm()

    useEffect(() => {
        if (activeId) {
            const activeThing = things.filter(thing => thing.id === activeId)[0]
            setValue('name', activeThing.name)
            setValue('task', activeThing.task)
        }
    }, [activeId])

    const registerThing = (data) => {
        if (activeId) {
            updateThing(data)
            toast.success('Tarea Actualizada correctamente')
        } else {
            addThing(data)
            toast.success('Tarea Registrada Correctamente')
        }

        reset()
    }

    return (
     
            <div className="md:w-1/4  justify-center flex-col flex ">
                <h1 className="m-2 text-4xl text-center font-bold">To Do List</h1>

                <form className="shadow-md rounded-lg py-10 px-5 mb-10"
                    onSubmit={handleSubmit(registerThing)}
                >
                    <div>
                        <label htmlFor="name"
                            className="text-md p-3 font-bold"
                        >Nombre de la tarea</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full bg-slate-50 p-1 border border-gray-100"
                            {...register("name", {
                                required: 'El nombre de la tarea es obligatoria',
                            })}
                        />
                        {errors.name && (
                            <Error>
                                {errors.name?.message}
                            </Error>
                        )}
                    </div>

                    <div className="py-3">
                        <label htmlFor="name"
                            className="text-md p-3  font-bold"
                        >Descripción</label>
                        <input
                            id="task"
                            type="text"
                            className="w-full bg-slate-50 p-1 border border-gray-100"
                            {...register("task", {
                                required: 'La descripción de la tarea es obligatoria',
                            })}
                        />
                        {errors.task && (
                            <Error>
                                {errors.task?.message}
                            </Error>
                        )}
                    </div>

                    <input type="submit"
                        className="bg-purple-600 w-full text-white font-bold hover:bg-purple-800 p-3"
                        value='Guardar Tarea'
                    />


                </form>
            </div>
    )
}
