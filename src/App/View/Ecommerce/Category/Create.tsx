import React, { useEffect, useState } from 'react'
// import PageTitle from '../../Component/PageTitle'
import { CategoryChangeStatus, CategoryCreate } from '../../../Service/MarketPlase'
import { toast } from 'react-toastify'
import { ErrorMassage } from '../../../lib/Config'

export interface EditData {
  name: string
  description: string
  _id: string
}

type Props = {
  onSubmit: () => void,
  isEdit: boolean,
  editData: EditData | null
}

export const CreateCategory: React.FC<Props> = ({ onSubmit, isEdit = false, editData = null }) => {
  const toastId = React.useRef<any>(null);
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const categorySubmit = () => {
    toastId.current = toast("please wait category creating...", { type: toast.TYPE.INFO });
    CategoryCreate({ name, description }).then((data) => {
      if (data.status) {
        toast.update(toastId.current, {
          type: toast.TYPE.SUCCESS,
          render: data.massage
        });
        setName("");
        setDescription("");
        onSubmit()
      } else {
        toast.update(toastId.current, { type: toast.TYPE.ERROR, render: data.massage });
      }
    }).catch(() => {
      toast.update(toastId.current, { type: toast.TYPE.ERROR, render: ErrorMassage });
    })
  }
  useEffect(() => {
    if (isEdit && editData) {
      setName(editData?.name)
      setDescription(editData.description)
    }
  }, [editData, isEdit])

  const catagoryUpdate = () => {
    if (isEdit && editData) {
      CategoryChangeStatus(editData._id, { name, description}).then((data) => {
        if (data.status) {
          toast(data.massage, { type: toast.TYPE.SUCCESS });
          onSubmit()
        } else {
          toast(data.massage, { type: toast.TYPE.ERROR });
        }
      }).catch(() => {
        toast(ErrorMassage, { type: toast.TYPE.ERROR });
      })
    }
  }

  return (
    <div className="row">
      <div className='card'>
        <div className='card-body'>
          <h4 className="header-title">{isEdit ? "Edit" : "Create"} Category</h4>
          <p className="sub-header">{isEdit ? "Edit" : "Create"} Category use for post</p>
          <div className='row'>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Category Name</label>
                <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Category Description</label>
                <textarea id="description" className="form-control" rows={2} onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
              </div>
            </div>
          </div>
          <button className="btn btn-primary waves-effect waves-light" onClick={!isEdit ?categorySubmit : catagoryUpdate}>Submit</button>
        </div>
      </div>
    </div>
  )
}