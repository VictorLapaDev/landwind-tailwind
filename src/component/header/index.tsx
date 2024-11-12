import DarkModeToggle from "../button-darkmode";

export function Header() {
  return (
    <div className="bg-slate-300 dark:bg-slate-800 w-100% flex">
        <DarkModeToggle></DarkModeToggle>
    </div>
  )
}
