import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  return (
    <div>CreatePost</div>
  )
}

export default CreatePost