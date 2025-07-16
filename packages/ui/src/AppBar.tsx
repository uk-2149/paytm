import { Button } from "./button";

// interface AppbarProps {
//     user?: {
//         name?: string | null;
//     },
//     // TODO: can u figure out what the type should be here?
//     onSignin: any,
//     onSignout: any
// }

export const Appbar = () => {
    return <div className="flex justify-between border-b px-4">
        <div className="text-lg flex flex-col justify-center">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            {/* <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button> */}
            <Button onClick={() => {console.log("clicked")}}>{"Login"}</Button>
        </div>
    </div>
}

// {
//     user,
//     onSignin,
//     onSignout
// }: AppbarProps