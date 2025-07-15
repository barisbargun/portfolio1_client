import { Navbar } from '../global/navbar'
import { ThemeProvider } from '../global/theme-provider'
import { Toaster } from '../ui/sonner'

type Props = {
  children: React.ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col pb-16 sm:pb-36 lg:pb-10">{children}</main>
      <Toaster />
    </ThemeProvider>
  )
}
