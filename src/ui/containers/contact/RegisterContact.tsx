import { useRegisterContact } from '@/lib/hooks/useRegisterContact'
import { TListCompany } from '@/lib/utils/type'
import { ButtonCommon } from '@/ui/components/common/ButtonCommon'
import { InputCommon } from '@/ui/components/common/InputCommon'
import { SelectCommon } from '@/ui/components/common/SelectCommon'
import { FC } from 'react'

type Props = {
  listCompanies: TListCompany[]
}

export const RegisterContact: FC<Props> = ({ listCompanies }) => {
  const { listOptionCompanies, registerContact } = useRegisterContact({ listCompanies })

  return (
    <div className="registerContact">
      <div className="registerContact__title">
        <h2>Registrar contacto</h2>
      </div>
      <div className="registerContact__input">
        <InputCommon type="text" placeholder="Nombres completos" />
      </div>
      <div className="registerContact__input">
        <InputCommon type="text" placeholder="Correo" />
      </div>
      <div className="registerContact__input">
        <InputCommon type="text" placeholder="Celular" />
      </div>
      <div className="registerContact__input">
        <InputCommon type="text" placeholder="Dirección" />
      </div>
      <div className="registerContact__input">
        <SelectCommon listOptions={listOptionCompanies} placeholder="Seleccione un empresa" />
      </div>
      <div className="registerContact__button">
        <ButtonCommon text="Registrar" onClick={registerContact} />
      </div>
    </div>
  )
}
