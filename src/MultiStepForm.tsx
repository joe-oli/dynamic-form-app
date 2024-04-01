import React from 'react';
import './MultiStepForm.css'; // Import your CSS


const MultiStepForm: React.FC = () => {
  return (
    <div className="MultiStepForm">
      <div className="form-container">

        {/* Form Items */}
        <div className="form-item">
          <label>1. The agent details in the CRM and CMS are consistent.</label>
          <div>If not, please correct the CMS and then update your response to this question.</div>
          <div className="form-value">--</div>
        </div>
        {/* Add more form items as needed */}

        <div className="form-item">
          <label>Q2. Question 2.</label>
          <div>If not, please correct the CMS and then update your response to this question.</div>
          <div className="form-value">--</div>
        </div>

        <div className="form-item">
          <label>Q3. Question 3.</label>
          <div>If not, please correct the CMS and then update your response to this question.</div>
          <div className="form-value">--</div>
        </div>

        <details name='hello world'>
          <summary>Click to expand</summary>
          <p>Hello world!</p>

          <p>&nbsp;</p>

          <p>Inkubus cartridgia lowus. Nozzlege clogus maximus. Papirus ejectus malfunctionus. Pleaseus consultus manualus for troublshootus.</p>
          <p>Calibrateus printus headus for optimumus qualityus. Photosaurus printus in vividus colorus. Textus printus in crispus sharpnessus. Epsonus printerus: for all your documentus needus.</p>
          <p>Scannus documentus with easeus. Imperfectus textus captured with clarityus. Fadedus inkus no matchus for Epsonus scannerus.</p>


          <p>&nbsp;</p>

          <p>Inkubus cartridgia lowus. Nozzlege clogus maximus. Papirus ejectus malfunctionus. Pleaseus consultus manualus for troublshootus.</p>
          <p>Calibrateus printus headus for optimumus qualityus. Photosaurus printus in vividus colorus. Textus printus in crispus sharpnessus. Epsonus printerus: for all your documentus needus.</p>
          <p>Scannus documentus with easeus. Imperfectus textus captured with clarityus. Fadedus inkus no matchus for Epsonus scannerus.</p>


        </details>

      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        {/* <button>Documents</button>
          <button>Save</button>
          <button>Validate & Save</button> */}
        <a href="#">Documents</a>
        <a href="#">Save</a>
        <a href="#">Validate & Save</a>
      </div>
    </div>
  );
};

export default MultiStepForm;
