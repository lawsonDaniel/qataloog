import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import Image from 'next/image';
import { IconButton, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';

const academicLevel = ['Primary School', 'Tertiary Education', 'High School'];
const randomAcademicLevel = () => randomArrayItem(academicLevel);

const initialRows: GridRowsProp = [
  {
    id: randomId(),
    sn: 1,
    ACADEMICLEVEL: randomAcademicLevel(),
    RATE: 600,
    DATECREATED: randomCreatedDate(),
    DATEUPDATED: randomCreatedDate(),
  },
  {
    id: randomId(),
    sn: 2,
    ACADEMICLEVEL: randomAcademicLevel(),
    RATE: 2000,
    DATECREATED: randomCreatedDate(),
    DATEUPDATED: randomCreatedDate(),
  },
  {
    id: randomId(),
    sn: 3,
    ACADEMICLEVEL: randomAcademicLevel(),
    RATE: 1000,
    DATECREATED: randomCreatedDate(),
    DATEUPDATED: randomCreatedDate(),
  },
];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <Box sx={{ display: 'flex', mt: 2 }}>
      <Button sx={{
                    color:'#FAFAFF',
                    background:"#F14119",
                    width: '204px',
                    height: '48px',
                    padding: '12px 24px 12px 24px',
                    borderRadius: '48px',
                    fontSize:'13px',
                    lineHeight:'24px',
                    '&:hover':{
                    color:'#FAFAFF',
                    background:"#F14119",
                    }
                }} color="primary" startIcon={<Image src="/add.svg" alt="" width={24} height={24} />} onClick={handleClick}>
      Add Level Rate
      </Button>
    </Box>
  );
}

const CustomActionsCell = ({ id, rowModesModel, handleEditClick, handleSaveClick, handleDeleteClick, handleCancelClick }:any) => {
  const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

  if (isInEditMode) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:"center" }}>
        <Button
          startIcon={<Image src="/checkmark-circle-02.svg"  alt={''} width={24} height={24} />}
          onClick={handleSaveClick(id)}
          sx={{ color: '#33A854',fontSize:"12px" }}
        >
          Update
        </Button>
        <Button
          endIcon={ <Image src="/cancel-circle.svg"  alt={''} width={24} height={24} />}
          onClick={handleCancelClick(id)}
          sx={{ color: '#FF0000' ,fontSize:"12px"}}
        >
          Cancle
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        endIcon={<Image src="/edit-01.svg" alt={''} width={24} height={24}/>}
        onClick={handleEditClick(id)}
        sx={{ color: 'inherit',fontSize:"12px" }}
      >
        Edit
      </Button>
      <IconButton
        onClick={handleDeleteClick(id)}
        sx={{ color: 'inherit' }}
      >
        <Image src="/delete button.svg"  alt={''} width={24} height={24} />
      </IconButton>
    </Box>
  );
};

export default function PublisherEarnings() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const [country, setCountry] = React.useState('nigeria');

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
};

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'sn', headerName: 'S/N', width: 80, editable: true },
    {
      field: 'ACADEMICLEVEL',
      headerName: 'ACADEMIC LEVEL',
      width: 150,
      align: 'left',
      headerAlign: 'left',
      type: 'singleSelect',
      valueOptions: ['Primary School', 'Tertiary Education', 'High School'],
      editable: true,
    },
    {
      field: 'RATE',
      headerName: 'RATE',
      type: 'number',
      width: 80,
      editable: true,
    },
    {
      field: 'DATECREATED',
      headerName: 'DATE CREATED',
      width: 150,
      editable: true,
      type: 'date',
    },
    {
      field: 'DATEUPDATED',
      headerName: 'DATE UPDATED',
      width: 150,
      editable: true,
      type: 'date',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <CustomActionsCell
          id={params.id}
          rowModesModel={rowModesModel}
          handleEditClick={handleEditClick}
          handleSaveClick={handleSaveClick}
          handleDeleteClick={handleDeleteClick}
          handleCancelClick={handleCancelClick}
        />
      ),
    },
    {
        field: 'country',
        renderHeader: () =>   <Select
        sx={{ 
            '.MuiOutlinedInput-notchedOutline': { 
              border:"0.5px solid #D0D0D4"
            },
            width:"207px",
            
         }}
         IconComponent={() => (
            <Image src="/chevron-down.svg" alt={''} width={30} height={30} />
          )}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          className='w-[150px] px-2'
          onChange={handleChange}
        >
          <MenuItem value={'nigeria'} >
            <Box sx={{
                gap:"5px",
                display:"flex",
                alignItems:"center"
            }}>
            <Image width={20} height={20} src="/NG.svg" alt={"nigeria"}/>
            <Typography sx={{
              fontSize:'14px',
              fontWeight:'400'
            }}>Nigeria</Typography>
            </Box>
          </MenuItem>
        </Select>,
        width: 150,
        editable: false,
      },
  ];

  return (
    <Box
    sx={{
        height: 300,
        width: '100%',
        '& .MuiDataGrid-root': {
          border: 'none', // Remove the outer border
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 'none', // Remove the cell borders
        },
        '& .MuiDataGrid-columnHeaders': {
          borderBottom: 'none', // Remove the header bottom border
        },
        '& .MuiDataGrid-virtualScroller': {
          marginTop: '0px !important', // Adjust for any unwanted margin/padding
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
      />
      <EditToolbar setRows={setRows} setRowModesModel={setRowModesModel} />
    </Box>
  );
}
