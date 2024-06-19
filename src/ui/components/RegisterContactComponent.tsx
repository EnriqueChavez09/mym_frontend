import { useRegisterContact } from '@/lib/hooks/useRegisterContact'
import { TListCompany } from '@/lib/utils/type'
import { FC } from 'react'
import { ButtonCommon } from '../common/ButtonCommon'
import { InputCommon } from '../common/InputCommon'
import { SelectCommon } from '../common/SelectCommon'

type Props = {
  listCompanies: TListCompany[]
}

export const RegisterContactComponent: FC<Props> = ({ listCompanies }) => {
  const { listOptionCompanies, registerContact } = useRegisterContact({ listCompanies })

  return (
    <div className="registerContactComponent">
      <div className="registerContactComponent__title">
        <h2>Registrar contacto</h2>
      </div>
      <div className="registerContactComponent__input">
        <InputCommon type="text" placeholder="Nombres completos" />
      </div>
      <div className="registerContactComponent__input">
        <InputCommon type="text" placeholder="Correo" />
      </div>
      <div className="registerContactComponent__input">
        <InputCommon type="text" placeholder="Celular" />
      </div>
      <div className="registerContactComponent__input">
        <InputCommon type="text" placeholder="Dirección" />
      </div>
      <div className="registerContactComponent__input">
        <SelectCommon listOptions={listOptionCompanies} placeholder="Seleccione un empresa" />
      </div>
      <div className="registerContactComponent__button">
        <ButtonCommon text="Registrar" onClick={registerContact} />
      </div>
    </div>
  )
}
