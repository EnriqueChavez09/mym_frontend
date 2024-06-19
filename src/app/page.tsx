import { ButtonCommon } from '@/ui/common/ButtonCommon'
import { ContactTable } from '@/ui/components/ContactTable'

export default function Home() {
  return (
    <div className="home">
      <div className="home__bottonRegister">
        <ButtonCommon text="Resgistrar contacto" />
      </div>
      <div className="home__tableContact">
        <ContactTable />
      </div>
    </div>
  )
}
