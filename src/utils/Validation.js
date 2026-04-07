import { toast } from 'react-toastify';

//Cek data notes tidak Kosong
export const validateNote = ({ title, content }) => {
    const errors = [];

    if (!title || title.trim() === "") {
      errors.push("Judul tidak boleh kosong");
    }

    if (!content || content.trim() === "") {
      errors.push("Isi konten tidak boleh kosong");
    }

    return errors;
  };

//Cek Id valid atau tidak
export const validateId = (id)=> {
    if(!id)
    {
      toast.error("ID tidak valid");
      return false
    }
    return true
}

//cek data Categories tidak kosong
export const validateCategories = ({ name, code_color }) => {
    const errors = [];

    if (!name || name.trim() === "") {
      errors.push("Nama tidak boleh kosong");
    }

    if (!code_color || code_color.trim() === "") {
      errors.push("Warna tidak boleh kosong");
    }

    return errors;
  };