import * as yup from 'yup';

export const DoctorSchema = yup.object({
  userDocument: yup.number('solo números').max(99999999, 'dni invalido').required('Campo requerido'),
  userName: yup.string().required('Campo requerido'),
  userLastName: yup.string().required('Campo requerido'),
  userBirthDay: yup.string().required('Campo requerido'),
  userTelephone: yup.number().required('El número telefónico es requerido'),
  userCellphone: yup.number().required('El número del celular es requerido'),
  userStreet: yup.string().required('Campo requerido'),
  userNumber: yup.string().required('el numero de la dirección es requerido'),
  userCity: yup.string().required('Campo requerido'),
  userPostalCode: yup.number().positive().integer().required('Campo requerido'),
  userEmail: yup.string().email('Ingrese una dirección de email valida').required('Campo requerido'),
  userPassword: yup.string('Password invalido').required('El password es requerido'),
  // userImgProfile: yup.file().required('la fotografía es requerida'),

  doctorTitle: yup.string().required('Campo requerido'),
  doctorSpecialization: yup.string().required('Campo requerido'),
  doctorTuitionDate: yup.string().required('Campo requerido'),
  doctorTuitionNumber: yup.string().required('Campo requerido'),

  clinicName: yup.string().required('Campo requerido'),
  clinicStreet: yup.string().required('Campo requerido'),
  clinicNumber: yup.string().required('el numero de la dirección es requerido'),
  clinicCity: yup.string().required('Campo requerido'),
  clinicPostalCode: yup.number().positive().integer().required('Campo requerido'),
  clinicTelephone: yup.number().required('El número telefónico es requerido'),
  clinicEmail: yup.string().email('Ingrese una direccion email validad').required('la direccón email es requerida'),
  clinicHours: yup.string().required('Campo requerido'),
  clinicLogo: yup.string().required('el logo es requerido'),
});
