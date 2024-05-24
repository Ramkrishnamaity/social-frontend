
interface UserImageDataType {
    name: string
    url?: string
    size?: "xs" | "md" | "sm" | "lg" | "xl"
}
export const UserImage: React.FC<UserImageDataType> = ({ name, url, size = "sm" }) => {
    return (
        <img src={url ?? `https://ui-avatars.com/api/?background=random&rounded=true&name=${name}`}
            alt={`${name}`}
            className={`rounded-circle avatar-${size}`}
            data-bs-container="#tooltips-container"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            aria-label={name}
            data-bs-original-title={name}
        />
    )
}