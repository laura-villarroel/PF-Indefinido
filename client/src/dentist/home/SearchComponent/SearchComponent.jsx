import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clear, getAllPatients } from '../../../redux/actions';
import Box from '@mui/material/Box';
import GridWrapper from '../../../sharedComponents/GridWrapper/GridWrapper';
import PatientCard from '../PatientCard/PatientCard';
import SearchBar from '../SearchBar/SearchBar';
import s from './search.module.css';
const cardHeaderStyles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px',
    height: '65px',
    backgroundColor: '#f5f5f5',
    marginBottom: '20px',
  },
  addUserButton: {
    fontSize: '1.05rem',
  },
};

export default function SearchComponent() {
  const searchedPatient = useSelector(state => state.searchedPatient);
  const allPatients = useSelector(state => state.allPatients);
  const filledPatients = !!allPatients.length;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!filledPatients) dispatch(getAllPatients());
    return () => dispatch(clear());
  }, []);
  return (
    <GridWrapper>
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar placeholder="Buscar paciente.." searchBarWidth="720px" />
      </Box>
      {searchedPatient.length ? (
        searchedPatient.map(patient => (
          <PatientCard
            key={patient.Patient.ID}
            ID={patient.Patient.ID}
            name={patient.name}
            lastName={patient.lastName}
            imageProfile={patient.imageProfile}
          />
        ))
      ) : (
        <PatientCard
          name="Alfonso de Prueba"
          lastName="Nada de nada"
          imageProfile="https://i.gyazo.com/91c25cfe3cba6768abc0f2153ce58538.png"
        />
      )}
      {filledPatients ? (
        allPatients.map(patient => (
          <PatientCard
            key={patient.Patient.ID}
            ID={patient.ID}
            name={patient.name}
            lastName={patient.lastName}
            imageProfile={patient.imageProfile}
          />
        ))
      ) : (
        <h2>Cargando Usuarios...</h2>
      )}
    </GridWrapper>
  );
}
