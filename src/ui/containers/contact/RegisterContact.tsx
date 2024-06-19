import { useRegisterContact } from '@/lib/hooks/useRegisterContact'
import { Regex } from '@/lib/utils/regex'
import { TListCompany } from '@/lib/utils/type'
import { ButtonCommon } from '@/ui/components/common/ButtonCommon'
import { InputCommon } from '@/ui/components/common/InputCommon'
import { SelectCommon } from '@/ui/components/common/SelectCommon'
import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  listCompanies: TListCompany[]
}

export const RegisterContact: FC<Props> = ({ listCompanies, setIsOpen }) => {
  const { listOptionCompanies, handleSubmit, register, registerContact, errors } = useRegisterContact({
    listCompanies,
    setIsOpen,
  })
  return (
    <div className="cruContact">
      <div className="cruContact__title">
        <h2>Registrar contacto</h2>
      </div>
      <div className="cruContact__input">
        <InputCommon
          register={register('fullNames', { required: 'Campo requerido' })}
          error={errors.fullNames}
          type="text"
          label="Nombres completos"
          placeholder="Ingrese sus nombres completos"
        />
      </div>
      <div className="cruContact__input two">
        <InputCommon
          register={register('email', {
            required: 'Campo requerido',
            pattern: {
              value: Regex.email,
              message: 'Email no válido. Ejm: example@gmail.com',
            },
          })}
          error={errors.email}
          type="text"
          label="Correo"
          placeholder="Ingrese su correo"
        />
        <InputCommon
          register={register('phone', {
            required: 'Campo requerido',
            pattern: {
              value: Regex.phone,
              message: 'Celular no válido. Ejm: 987654321',
            },
          })}
          error={errors.phone}
          type="text"
          label="Celular"
          placeholder="Ingrese su celular"
        />
      </div>
      <div className="cruContact__input two">
        <InputCommon
          register={register('address', { required: 'Campo requerido' })}
          error={errors.address}
          type="text"
          label="Dirección"
          placeholder="Ingrese su dirección"
        />
        <SelectCommon
          register={register('company', { required: 'Campo requerido' })}
          error={errors.company}
          listOptions={listOptionCompanies}
          label="Empresa"
          placeholder="Seleccione un empresa"
        />
      </div>
      <div className="cruContact__button">
        <ButtonCommon text="Registrar" onClick={handleSubmit(registerContact)} />
      </div>
    </div>
  )
}
