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
    <div className="cruContact">
      <div className="cruContact__title">
        <h2>Registrar contacto</h2>
      </div>
      <div className="cruContact__input">
        <InputCommon type="text" label="Nombres completos" placeholder="Ingrese sus nombres completos" />
      </div>
      <div className="cruContact__input two">
        <InputCommon type="text" label="Correo" placeholder="Ingrese su correo" />
        <InputCommon type="text" label="Celular" placeholder="Ingrese su celular" />
      </div>
      <div className="cruContact__input two">
        <InputCommon type="text" label="Dirección" placeholder="Ingrese su dirección" />
        <SelectCommon listOptions={listOptionCompanies} label="Empresa" placeholder="Seleccione un empresa" />
      </div>
      <div className="cruContact__button">
        <ButtonCommon text="Registrar" onClick={registerContact} />
      </div>
    </div>
  )
}
