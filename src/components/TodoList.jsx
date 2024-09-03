import { useToDoStore } from "../store"
import { TodoDetails } from "./TodoDetails"

export const TodoList = () => {

    const things = useToDoStore(state => state.things)

    return (

        <div className="m-3 mb-20">
            <h2 className="text-center font-bold text-2xl mb-10">
                Lista de tareas
            </h2>
            {things.length ? (

                    <div className="grid h-full md:grid-cols-3 gap-6">

                        {things.map(thing => (
                            <TodoDetails
                                key={thing.id}
                                thing={thing}
                            />
                        ))}
                    </div>
            ) : (
                <>
                    <h2 className="uppercase">
                        No hay tareas que mostrar
                    </h2>
                </>
            )
            }
        </div>
    )
}
