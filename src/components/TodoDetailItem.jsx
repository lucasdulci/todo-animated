import { MagicMotion } from "react-magic-motion"

export const TodoDetailItem = ({ label, data }) => {
    return (
        <MagicMotion>

            <p className="font-bold text-md mb-3 text-gray-700 uppercase">
                {label}: {''}
                <span className="text-sm normal-case">
                    {data}
                </span>
            </p>
        </MagicMotion>
    )
}
