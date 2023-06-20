//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) => {
  res.status(200).json({message : 'all contacts'})
}

//@desc Create new contact 
//@router POST /api/contacts 
//@access public
const createContact = (req,res) => {
  res.status(200).json({message : `create contact`})
}

//@desc Get contact
//@router GET /api/contacts/:id
//@access public
const getContact = (req,res) => {
  res.status(200).json({message : `get the contact for ${req.params.id}`})
}

//@desc Update contact 
//@router PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({message : `update the contact for ${req.params.id}`})
}

//@desc Delete contact
//@router DELETE api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({message : `delete the contact for ${req.params.id}`})
}

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}