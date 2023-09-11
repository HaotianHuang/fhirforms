
export const Q715 = {
    resourceType: 'Questionnaire',
    id: 'AboriginalTorresStraitIslanderHealthCheck',
    meta: {
      versionId: '7',
      lastUpdated: '2023-08-19T04:12:52.761+00:00',
      source: '#EZXPUbLJ5QGKtb9j',
      profile: [
        'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-modular',
        'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-pop-exp',
        'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-render'
      ]
    },
    contained: [
      {
        resourceType: 'ValueSet',
        id: 'YesNoNA',
        url: 'https://smartforms.csiro.au/ig/ValueSet/YesNoNA',
        name: 'YesNoNA',
        title: 'Yes No NA',
        status: 'draft',
        experimental: false,
        description: 'Concepts for Yes, No and Not applicable',
        compose: {
          include: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
              concept: [
                {
                  code: 'Y',
                  display: 'Yes'
                },
                {
                  code: 'N',
                  display: 'No'
                }
              ]
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
              concept: [
                {
                  code: 'NA',
                  display: 'N/A'
                }
              ]
            }
          ]
        },
        expansion: {
          identifier: '7709b027-415d-4eff-abf0-dc8edb2dc8fa',
          timestamp: '2022-10-20T09:39:51+10:00',
          total: 3,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri: 'http://terminology.hl7.org/CodeSystem/v2-0136|2.9'
            },
            {
              name: 'version',
              valueUri: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor|2018-08-12'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
              version: '2.9',
              code: 'Y',
              display: 'Yes'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
              version: '2.9',
              code: 'N',
              display: 'No'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
              version: '2018-08-12',
              code: 'NA',
              display: 'not applicable'
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'AboriginalTorresStraitIslander',
        url: 'https://smartforms.csiro.au/ig/ValueSet/AboriginalTorresStraitIslander',
        name: 'AboriginalTorresStraitIslander',
        title: 'Aboriginal and/or Torres Strait Islander',
        status: 'draft',
        experimental: false,
        description:
            'The Aboriginal and/or Torres Strait Islander value set includes the Australian Indigenous statuses for Indigenous people.',
        compose: {
          include: [
            {
              system:
                  'https://healthterminologies.gov.au/fhir/CodeSystem/australian-indigenous-status-1',
              concept: [
                {
                  code: '1',
                  display: 'Aboriginal'
                },
                {
                  code: '2',
                  display: 'Torres Strait Islander'
                },
                {
                  code: '3',
                  display: 'Aboriginal and Torres Strait Islander'
                }
              ]
            }
          ]
        },
        expansion: {
          identifier: 'e2b013bd-1725-4299-a7a5-53635d42f1be',
          timestamp: '2022-10-20T11:38:45+10:00',
          total: 3,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri:
                  'https://healthterminologies.gov.au/fhir/CodeSystem/australian-indigenous-status-1|1.0.3'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system:
                  'https://healthterminologies.gov.au/fhir/CodeSystem/australian-indigenous-status-1',
              code: '1',
              display: 'Aboriginal but not Torres Strait Islander origin'
            },
            {
              system:
                  'https://healthterminologies.gov.au/fhir/CodeSystem/australian-indigenous-status-1',
              code: '2',
              display: 'Torres Strait Islander but not Aboriginal origin'
            },
            {
              system:
                  'https://healthterminologies.gov.au/fhir/CodeSystem/australian-indigenous-status-1',
              code: '3',
              display: 'Both Aboriginal and Torres Strait Islander origin'
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'PrimaryCarerParentGrandparent',
        url: 'https://smartforms.csiro.au/ig/ValueSet/PrimaryCarerParentGrandparent',
        name: 'PrimaryCarerParentGrandparent',
        title: 'Primary Carer Of Parent Or Grandparent',
        status: 'draft',
        experimental: false,
        description:
            'The Primary Carer Of Parent Or Grandparent value set includes values that can indicate whether a primary carer is one of the parents or a grandparent.',
        compose: {
          include: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              concept: [
                {
                  code: 'MTH'
                },
                {
                  code: 'FTH'
                },
                {
                  code: 'GRPRN'
                }
              ]
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
              concept: [
                {
                  code: 'NA'
                }
              ]
            }
          ]
        },
        expansion: {
          identifier: '2809c2fa-28ec-4def-9b16-93a611d29da3',
          timestamp: '2022-10-20T11:42:30+10:00',
          total: 4,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode|2018-08-12'
            },
            {
              name: 'version',
              valueUri: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor|2018-08-12'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              version: '2018-08-12',
              code: 'MTH',
              display: 'mother'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              version: '2018-08-12',
              code: 'FTH',
              display: 'father'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              version: '2018-08-12',
              code: 'GRPRN',
              display: 'grandparent'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
              version: '2018-08-12',
              code: 'NA',
              display: 'not applicable'
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'YesNo',
        url: 'https://smartforms.csiro.au/ig/ValueSet/YesNo',
        name: 'YesNo',
        title: 'Yes No',
        status: 'draft',
        experimental: false,
        description: 'Concepts for Yes and No',
        compose: {
          include: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
              concept: [
                {
                  code: 'Y',
                  display: 'Yes'
                },
                {
                  code: 'N',
                  display: 'No'
                }
              ]
            }
          ]
        },
        expansion: {
          identifier: '91d952b0-22ed-474a-aad7-da1db1d7dcc7',
          timestamp: '2022-10-20T09:43:07+10:00',
          total: 2,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri: 'http://terminology.hl7.org/CodeSystem/v2-0136|2.9'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
              code: 'Y',
              display: 'Yes'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
              code: 'N',
              display: 'No'
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'MedicalHistory',
        url: 'https://smartforms.csiro.au/ig/ValueSet/MedicalHistory',
        name: 'MedicalHistory',
        title: 'Medical History',
        status: 'draft',
        experimental: false,
        description:
            'The Medical History value set includes values that may be used to represent medical history, operations and hospital admissions.',
        compose: {
          include: [
            {
              system: 'http://snomed.info/sct',
              filter: [
                {
                  property: 'constraint',
                  op: '=',
                  value:
                      '^32570581000036105|Problem/Diagnosis reference set| OR ^32570141000036105|Procedure foundation reference set|'
                }
              ]
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'MedicalHistoryShortListInfants',
        url: 'https://smartforms.csiro.au/ig/ValueSet/MedicalHistoryShortListInfants',
        name: 'MedicalHistoryShortListInfants',
        title: 'Medical History Short List for Infants',
        status: 'draft',
        experimental: false,
        description:
            'The Medical History Short List for Infants value set includes values to represent conditions for use in a pick list for the MBS 715 Health Check for Infants.',
        compose: {
          include: [
            {
              system: 'http://snomed.info/sct',
              concept: [
                {
                  code: '609496007'
                },
                {
                  code: '199745000'
                },
                {
                  code: '80113008'
                },
                {
                  code: '32485007'
                },
                {
                  code: '50417007'
                },
                {
                  code: '49727002'
                },
                {
                  code: '129127001'
                },
                {
                  code: '38394007'
                },
                {
                  code: '78868004'
                },
                {
                  code: '247253001'
                },
                {
                  code: '43381005'
                },
                {
                  code: '195528001'
                },
                {
                  code: '312591002'
                }
              ]
            }
          ]
        },
        expansion: {
          identifier: '06bd5f41-3c10-4cdb-a304-b8127d72957f',
          timestamp: '2022-10-20T09:50:13+10:00',
          total: 13,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri:
                  'http://snomed.info/sct|http://snomed.info/sct/32506021000036107/version/20220930'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system: 'http://snomed.info/sct',
              code: '609496007',
              display: 'Complication occurring during pregnancy'
            },
            {
              system: 'http://snomed.info/sct',
              code: '199745000',
              display: 'Complication occurring during labour and delivery'
            },
            {
              system: 'http://snomed.info/sct',
              code: '80113008',
              display: 'Complication of the puerperium'
            },
            {
              system: 'http://snomed.info/sct',
              code: '32485007',
              display: 'Hospital admission'
            },
            {
              system: 'http://snomed.info/sct',
              code: '50417007',
              display: 'Lower respiratory tract infection'
            },
            {
              system: 'http://snomed.info/sct',
              code: '49727002',
              display: 'Cough'
            },
            {
              system: 'http://snomed.info/sct',
              code: '129127001',
              display: 'Ear infection'
            },
            {
              system: 'http://snomed.info/sct',
              code: '38394007',
              display: 'Chronic otitis media with perforation'
            },
            {
              system: 'http://snomed.info/sct',
              code: '78868004',
              display: 'Chronic mucoid otitis media'
            },
            {
              system: 'http://snomed.info/sct',
              code: '247253001',
              display: 'Ventilation tube in tympanic membrane'
            },
            {
              system: 'http://snomed.info/sct',
              code: '43381005',
              display: 'Passive smoker'
            },
            {
              system: 'http://snomed.info/sct',
              code: '195528001',
              display: 'Acute rheumatic fever'
            },
            {
              system: 'http://snomed.info/sct',
              code: '312591002',
              display: 'Acute rheumatic heart disease'
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'MedicalHistoryShortListPrimarySchool',
        url: 'https://smartforms.csiro.au/ig/ValueSet/MedicalHistoryShortListPrimarySchool',
        name: 'MedicalHistoryShortListPrimarySchool',
        title: 'Medical History Short List for Primary School Children',
        status: 'draft',
        experimental: false,
        description:
            'The Medical History Short List for Primary School Children value set includes values to represent conditions for use in a pick list for the MBS 715 Health Check for Primary School Children.',
        compose: {
          include: [
            {
              system: 'http://snomed.info/sct',
              concept: [
                {
                  code: '50417007'
                },
                {
                  code: '49727002'
                },
                {
                  code: '129127001'
                },
                {
                  code: '38394007'
                },
                {
                  code: '78868004'
                },
                {
                  code: '247253001'
                },
                {
                  code: '129823000'
                },
                {
                  code: '195528001'
                },
                {
                  code: '312591002'
                },
                {
                  code: '43381005'
                },
                {
                  code: '32485007'
                }
              ]
            }
          ]
        },
        expansion: {
          identifier: '455f4b6f-5083-4f56-8995-5ec798e47cc4',
          timestamp: '2022-10-20T09:54:05+10:00',
          total: 11,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri:
                  'http://snomed.info/sct|http://snomed.info/sct/32506021000036107/version/20220930'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system: 'http://snomed.info/sct',
              code: '50417007',
              display: 'Lower respiratory tract infection'
            },
            {
              system: 'http://snomed.info/sct',
              code: '49727002',
              display: 'Cough'
            },
            {
              system: 'http://snomed.info/sct',
              code: '129127001',
              display: 'Ear infection'
            },
            {
              system: 'http://snomed.info/sct',
              code: '38394007',
              display: 'Chronic otitis media with perforation'
            },
            {
              system: 'http://snomed.info/sct',
              code: '78868004',
              display: 'Chronic mucoid otitis media'
            },
            {
              system: 'http://snomed.info/sct',
              code: '247253001',
              display: 'Ventilation tube in tympanic membrane'
            },
            {
              system: 'http://snomed.info/sct',
              code: '129823000',
              display: 'Childhood growth AND/OR development alteration'
            },
            {
              system: 'http://snomed.info/sct',
              code: '195528001',
              display: 'Acute rheumatic fever'
            },
            {
              system: 'http://snomed.info/sct',
              code: '312591002',
              display: 'Acute rheumatic heart disease'
            },
            {
              system: 'http://snomed.info/sct',
              code: '43381005',
              display: 'Passive smoker'
            },
            {
              system: 'http://snomed.info/sct',
              code: '32485007',
              display: 'Hospital admission'
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'MedicalHistoryShortListAdolescents',
        url: 'https://smartforms.csiro.au/ig/ValueSet/MedicalHistoryShortListAdolescents',
        name: 'MedicalHistoryShortListAdolescents',
        title: 'Medical History Short List for Adolescents',
        status: 'draft',
        experimental: false,
        description:
            'The Medical History Short List for Adolescents value set includes values to represent conditions for use in a pick list for the MBS 715 Health Check for Adolescents.',
        compose: {
          include: [
            {
              system: 'http://snomed.info/sct',
              concept: [
                {
                  code: '129127001'
                },
                {
                  code: '300228004'
                },
                {
                  code: '195967001'
                },
                {
                  code: '38341003'
                },
                {
                  code: '84757009'
                },
                {
                  code: '25064002'
                },
                {
                  code: '37796009'
                },
                {
                  code: '73211009'
                },
                {
                  code: '23685000'
                },
                {
                  code: '90708001'
                },
                {
                  code: '413307004'
                }
              ]
            }
          ]
        },
        expansion: {
          identifier: '5b0bb9f4-1ca3-47e2-bb1d-91cad5454ce4',
          timestamp: '2022-10-20T09:45:56+10:00',
          total: 11,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri:
                  'http://snomed.info/sct|http://snomed.info/sct/32506021000036107/version/20220930'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system: 'http://snomed.info/sct',
              code: '129127001',
              display: 'Ear infection'
            },
            {
              system: 'http://snomed.info/sct',
              code: '300228004',
              display: 'Hearing problem'
            },
            {
              system: 'http://snomed.info/sct',
              code: '195967001',
              display: 'Asthma'
            },
            {
              system: 'http://snomed.info/sct',
              code: '38341003',
              display: 'Hypertension'
            },
            {
              system: 'http://snomed.info/sct',
              code: '84757009',
              display: 'Epilepsy'
            },
            {
              system: 'http://snomed.info/sct',
              code: '25064002',
              display: 'Headache'
            },
            {
              system: 'http://snomed.info/sct',
              code: '37796009',
              display: 'Migraine'
            },
            {
              system: 'http://snomed.info/sct',
              code: '73211009',
              display: 'Diabetes mellitus'
            },
            {
              system: 'http://snomed.info/sct',
              code: '23685000',
              display: 'Rheumatic heart disease'
            },
            {
              system: 'http://snomed.info/sct',
              code: '90708001',
              display: 'Kidney disease'
            },
            {
              system: 'http://snomed.info/sct',
              code: '413307004',
              display: 'Mental health problem'
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'MedicalHistoryShortListAdultsAndOlderPeople',
        url: 'https://smartforms.csiro.au/ig/ValueSet/MedicalHistoryShortListAdultsAndOlderPeople',
        name: 'MedicalHistoryShortListAdultsAndOlderPeople',
        title: 'Medical History Short List for Adults and Older People',
        status: 'draft',
        experimental: false,
        description:
            'The Medical History Short List for Adults and Older People value set includes values to represent conditions for use in a pick list for the MBS 715 Health Check for Adults and Older People.',
        compose: {
          include: [
            {
              system: 'http://snomed.info/sct',
              concept: [
                {
                  code: '44054006'
                },
                {
                  code: '38341003'
                },
                {
                  code: '22298006'
                },
                {
                  code: '230690007'
                },
                {
                  code: '90708001'
                },
                {
                  code: '15188001'
                },
                {
                  code: '84757009'
                },
                {
                  code: '195967001'
                },
                {
                  code: '13645005'
                },
                {
                  code: '23685000'
                },
                {
                  code: '66071002'
                },
                {
                  code: '82271004'
                },
                {
                  code: '413307004'
                }
              ]
            }
          ]
        },
        expansion: {
          identifier: '1998291e-ed8a-49f2-ac11-9e6056efd7f3',
          timestamp: '2022-10-20T09:48:19+10:00',
          total: 13,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri:
                  'http://snomed.info/sct|http://snomed.info/sct/32506021000036107/version/20220930'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system: 'http://snomed.info/sct',
              code: '44054006',
              display: 'Type 2 diabetes mellitus'
            },
            {
              system: 'http://snomed.info/sct',
              code: '38341003',
              display: 'Hypertension'
            },
            {
              system: 'http://snomed.info/sct',
              code: '22298006',
              display: 'Myocardial infarction'
            },
            {
              system: 'http://snomed.info/sct',
              code: '230690007',
              display: 'Stroke'
            },
            {
              system: 'http://snomed.info/sct',
              code: '90708001',
              display: 'Kidney disease'
            },
            {
              system: 'http://snomed.info/sct',
              code: '15188001',
              display: 'Hearing loss'
            },
            {
              system: 'http://snomed.info/sct',
              code: '84757009',
              display: 'Epilepsy'
            },
            {
              system: 'http://snomed.info/sct',
              code: '195967001',
              display: 'Asthma'
            },
            {
              system: 'http://snomed.info/sct',
              code: '13645005',
              display: 'COPD'
            },
            {
              system: 'http://snomed.info/sct',
              code: '23685000',
              display: 'Rheumatic heart disease'
            },
            {
              system: 'http://snomed.info/sct',
              code: '66071002',
              display: 'Hepatitis B'
            },
            {
              system: 'http://snomed.info/sct',
              code: '82271004',
              display: 'Head injury'
            },
            {
              system: 'http://snomed.info/sct',
              code: '413307004',
              display: 'Mental health problem'
            }
          ]
        }
      },
      {
        resourceType: 'ValueSet',
        id: 'condition-clinical',
        meta: {
          profile: ['http://hl7.org/fhir/StructureDefinition/shareablevalueset']
        },
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-wg',
            valueCode: 'pc'
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status',
            valueCode: 'trial-use'
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm',
            valueInteger: 3
          }
        ],
        url: 'http://hl7.org/fhir/ValueSet/condition-clinical',
        identifier: [
          {
            system: 'urn:ietf:rfc:3986',
            value: 'urn:oid:2.16.840.1.113883.4.642.3.164'
          }
        ],
        version: '4.3.0',
        name: 'ConditionClinicalStatusCodes',
        title: 'Condition Clinical Status Codes',
        status: 'draft',
        experimental: false,
        publisher: 'FHIR Project team',
        contact: [
          {
            telecom: [
              {
                system: 'url',
                value: 'http://hl7.org/fhir'
              }
            ]
          }
        ],
        description: 'Preferred value set for Condition Clinical Status.',
        compose: {
          include: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical'
            }
          ]
        },
        expansion: {
          identifier: '5d4bed14-061a-42c4-853d-e6a624c4f483',
          timestamp: '2022-10-20T09:32:48+10:00',
          total: 6,
          offset: 0,
          parameter: [
            {
              name: 'version',
              valueUri: 'http://terminology.hl7.org/CodeSystem/condition-clinical|4.0.1'
            },
            {
              name: 'count',
              valueInteger: 2147483647
            },
            {
              name: 'offset',
              valueInteger: 0
            }
          ],
          contains: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'active',
              display: 'Active'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'inactive',
              display: 'Inactive'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'recurrence',
              display: 'Recurrence'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'relapse',
              display: 'Relapse'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'remission',
              display: 'Remission'
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'resolved',
              display: 'Resolved'
            }
          ]
        }
      }
    ],
    extension: [
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'Condition',
          language: 'application/x-fhir-query',
          expression: 'Condition?patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsTobaccoSmokingStatus',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=72166-2&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsBodyHeight',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=8302-2&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsBodyWeight',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=29463-7&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsBMI',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=39156-5&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsHeadCircumference',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=9843-4&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsWaistCircumference',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=8280-0&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsBloodPressure',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=85354-9&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsHeartRate',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=8867-4&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsTotalCholesterol',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=14647-2&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'http://hl7.org/fhir/StructureDefinition/variable',
        valueExpression: {
          name: 'ObsHDLCholesterol',
          language: 'application/x-fhir-query',
          expression: 'Observation?code=14646-4&_count=1&_sort=-date&patient={{%patient.id}}'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#YesNoNA'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#YesNo'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#MedicalHistory'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#MedicalHistoryShortListInfants'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#MedicalHistoryShortListPrimarySchool'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#MedicalHistoryShortListAdolescents'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#MedicalHistoryShortListAdultsAndOlderPeople'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#condition-clinical'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#AboriginalTorresStraitIslander'
        }
      },
      {
        url: 'https://smartforms.csiro.au/ig/StructureDefinition/ContainedResourceReference',
        valueReference: {
          reference: '#PrimaryCarerParentGrandparent'
        }
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext',
        extension: [
          {
            url: 'name',
            valueCoding: {
              system: 'http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext',
              code: 'patient'
            }
          },
          {
            url: 'type',
            valueCode: 'Patient'
          },
          {
            url: 'description',
            valueString: 'The patient that is to be used to pre-populate the form'
          }
        ]
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext',
        extension: [
          {
            url: 'name',
            valueCoding: {
              system: 'http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext',
              code: 'user'
            }
          },
          {
            url: 'type',
            valueCode: 'Practitioner'
          },
          {
            url: 'description',
            valueString: 'The practitioner user that is to be used to pre-populate the form'
          }
        ]
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/AboutTheHealthCheck'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/Consent'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/PatientDetails'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/CurrentPriorities'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/MedicalHistoryCurrentProblems'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/RegularMedications'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/AllergiesAdverseReactions'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/FamilyHistory'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/SocialAndEmotionalWellbeing'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/SocialHistoryChild'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/HomeAndFamily'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/LearningAndDevelopment'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/LearningAndWork'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/Mood'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/MemoryAndThinking'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/ChronicDiseaseAgeing'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/ScreeningPrograms'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/HealthyEating'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/PhysicalActivityAndScreenTime'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical:
            'http://www.health.gov.au/assessments/mbs/715/RedFlagsEarlyIdentificationGuide'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/SubstanceUse'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/Gambling'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/SexualHealth'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/EyeHealth'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/EarHealthAndHearing'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/OralAndDentalHealth'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/Skin'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/Immunisation'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/Examination'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/AbsoluteCVDRiskCalculation'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/Investigations'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/HealthPrioritiesSummary'
      },
      {
        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-assembledFrom',
        valueCanonical: 'http://www.health.gov.au/assessments/mbs/715/FinalisingHealthCheck'
      }
    ],
    url: 'http://www.health.gov.au/assessments/mbs/715',
    version: '0.1.0-assembled',
    name: 'AboriginalTorresStraitIslanderHealthCheck',
    title: 'Aboriginal and Torres Strait Islander Health Check',
    status: 'draft',
    experimental: false,
    subjectType: ['Patient'],
    date: '2022-05-24',
    description: 'Aboriginal and Torres Strait Islander Health Check assessment form.',
    jurisdiction: [
      {
        coding: [
          {
            system: 'urn:iso:std:iso:3166',
            code: 'AU'
          }
        ]
      }
    ],
    item: [
      {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
            valueCodeableConcept: {
              coding: [
                {
                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                  version: '1.0.0',
                  code: 'tab-container'
                }
              ]
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'weight',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='c587e3b6-b91a-40dc-9a16-179342d001e9').item.where(linkId='2136abeb-d75d-475d-9cc7-eeda8d131b95').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'height',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='c587e3b6-b91a-40dc-9a16-179342d001e9').item.where(linkId='2d68889b-88c1-4c6d-8b00-db4178dc1f52').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'female',
              language: 'text/fhirpath',
              expression:
                  "iif(item.where(linkId='5b224753-9365-44e3-823b-9c17e7394005').item.where(linkId='418e4a02-de77-48a0-a92a-fe8fcc52b1aa').answer.value.code='female', 1, 0)"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'age',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='5b224753-9365-44e3-823b-9c17e7394005').item.where(linkId='e2a16e4d-2765-4b61-b286-82cfc6356b30').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cvdAge',
              language: 'text/fhirpath',
              expression: 'iif(%age > 74, 74, iif(%age < 35, 35, %age))'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'systolicBP',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='d95abe99-8ef2-4b97-bc88-a2901e2ebc9c').item.where(linkId='4b98f514-2f6a-41f3-ad9d-185abc68ae34').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'smoker',
              language: 'text/fhirpath',
              expression:
                  "iif(item.where(linkId='14a9fb5f-5b0e-4862-b143-08a11cd3ebf0').item.where(linkId='515eda6e-973a-4b10-910a-0d4bf4f2efff').item.where(linkId='b639a3a8-f476-4cc8-b5c7-f5d2abb23511').answer.value.code='77176002', 1, 0)"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'totalCh',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='d95abe99-8ef2-4b97-bc88-a2901e2ebc9c').item.where(linkId='f11feebc-fc4a-40d5-8481-b87d9f5a89aa').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'hdl',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='d95abe99-8ef2-4b97-bc88-a2901e2ebc9c').item.where(linkId='c47a7fae-0c60-40f8-8426-1019b1f0dd8f').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'diabetes',
              language: 'text/fhirpath',
              expression:
                  "iif(item.where(linkId='d95abe99-8ef2-4b97-bc88-a2901e2ebc9c').item.where(linkId='e8fed84e-6c15-4f62-bc95-cd08033af3f7').answer.value = true,1,0)"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'ecgLvh',
              language: 'text/fhirpath',
              expression:
                  "iif(item.where(linkId='d95abe99-8ef2-4b97-bc88-a2901e2ebc9c').item.where(linkId='b980624c-e91a-44d4-80ba-a9f34c0e1188').answer.value = true,1,0)"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cBase',
              language: 'text/fhirpath',
              expression: '18.8144'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cFemale',
              language: 'text/fhirpath',
              expression: '%female * -1.2146'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cAge',
              language: 'text/fhirpath',
              expression: '%cvdAge.ln() * -1.8443'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cAgeFemale',
              language: 'text/fhirpath',
              expression: '%female * %cvdAge.ln() * 0.3668'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cSBP',
              language: 'text/fhirpath',
              expression: '%systolicBP.ln() * -1.4032'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cSmoker',
              language: 'text/fhirpath',
              expression: '%smoker * -0.3899'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cTcHdl',
              language: 'text/fhirpath',
              expression: '(%totalCh / %hdl).ln() * -0.539'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cDiabetes',
              language: 'text/fhirpath',
              expression: '%diabetes * -0.3036'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cDiabetesFemale',
              language: 'text/fhirpath',
              expression: '%female * %diabetes * -0.1697'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cEcgLvh',
              language: 'text/fhirpath',
              expression: '%ecgLvh * -0.3362'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'sumOfCoeffs',
              language: 'text/fhirpath',
              expression:
                  '%cBase + %cFemale + %cAge + %cAgeFemale + %cSBP + %cSmoker + %cTcHdl + %cDiabetes + %cDiabetesFemale + %cEcgLvh'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cvdScale',
              language: 'text/fhirpath',
              expression: '(0.6536 + (%sumOfCoeffs * -0.2402)).exp()'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cvdU',
              language: 'text/fhirpath',
              expression: '(5.ln()-%sumOfCoeffs)/%cvdScale'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'cvdScore',
              language: 'text/fhirpath',
              expression: '(1 - (%cvdU.exp()*-1).exp()) * 100'
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryCurrentPriorities',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='b3a3eee2-f340-452e-9d05-d1f54f677b81').item.where(linkId='7cd424e5-7672-4e99-8a99-30b1fb3043fd').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryMedicalHistory',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='28d5dbe4-1e65-487c-847a-847f544a6a91').item.where(linkId='62774152-8a6e-4449-af9f-87bdce8b9bf5').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryRegularMedications',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='7dfe7c6a-ca7f-4ddf-9241-a7b918a9695a').item.where(linkId='aa9ff2ed-bcd2-406d-a9ff-89c201df2605').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryAllergiesAdverseReactions',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='d4e4db07-a795-4a30-bd0f-9c109f96a22b').item.where(linkId='3e689aeb-69a1-4a9b-93bd-50377511dd9b').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryFamilyHistory',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='01f67f0b-e3be-48d8-a2ad-4c54f469cd13').item.where(linkId='49ee4583-c608-41d4-a1e9-c06cf4292369').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummarySocialEmotionalWellbeing',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='0a3c9c93-5836-4a5b-93e5-d7de559e053a').item.where(linkId='b5a00aad-2a8b-4ac3-87b2-4a5920ca22ee').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummarySocialHistory',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='a5cc8a8f-89cf-470c-a6bd-ce9da2f64ee9').item.where(linkId='76d51512-b94a-4092-b3ae-a656fbb9c360').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryHomeFamily',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='819b3305-bf93-4502-9986-242ea2ae5f43').item.where(linkId='08d2e80e-3bb4-4f67-8b1c-090b1ace225a').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryLearningDevelopment',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='3e7d7246-98f8-4803-b063-8405ac30b086').item.where(linkId='5ab80929-5901-431d-bf68-67d532f5fa58').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryLearningWorkAdults',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='5437e30d-8a0a-4785-974e-00a10d2a1df0').item.where(linkId='3569e514-a74b-4343-b31b-3395e58d991a').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryLearningWorkOlder',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='dec713ae-246a-4961-95c9-0626bfebfed2').item.where(linkId='ed6f7800-e22a-4639-9d11-faf845513500').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryMood',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='9559242e-9ffe-4e1f-a9fc-86d1fa62c4b9').item.where(linkId='db9a8650-42a2-4bd3-8066-7e09394120d5').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryMemoryThinking',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='1bd58e7b-2cb7-45fb-965f-d5fa33d0bb4c').item.where(linkId='1f0e7fde-e964-4f36-9151-dbdc5e145f94').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryChronicDiseaseAgeing',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='c5da020c-c4f3-437c-b658-ea7e7667514d').item.where(linkId='7292070b-8944-4a40-bcf6-9aaf1721e986').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryScreeningPrograms',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='9674ffa0-2ad9-4ca3-80e6-e8bb0670a802').item.where(linkId='70f82c4b-d1f9-44d5-9903-bd7097799c05').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryHealthyEating',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='ae7a3801-9491-4b1f-820c-678236d18f56').item.where(linkId='301789b0-8c6a-470d-8787-0ac6597e3bea').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryPhysicalActivityScreenTimeNotOlder',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='74736baa-455b-41d2-af98-fb65cd463e97').item.where(linkId='ccbd7fbf-0d40-4cb3-82b3-ad2c7cc7bba2').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryPhysicalActivityScreenTimeOlder',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='d56234a0-aafd-4c22-96c9-00ead8424f0b').item.where(linkId='25b8b8fd-adb1-48ab-aeae-528603668c4b').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummarySubstanceUse',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='14a9fb5f-5b0e-4862-b143-08a11cd3ebf0').item.where(linkId='f8e1cc1f-f1a1-4eb3-8255-77d600f52831').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryGambling',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='a7bb0dd2-4b2d-49c2-9da6-3cb0a4dd9240').item.where(linkId='2ab74c97-55d9-4fd9-968f-8962d62ea573').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummarySexualHealthAdolescents',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='4b49c291-6e93-4b7e-be3b-15ef8bc207ad').item.where(linkId='b41572ba-cf36-4cec-addf-cb0b47fea63f').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummarySexualHealthAdults',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='589b53a4-ceb2-41c0-850a-69438f9fd1cc').item.where(linkId='efd0735c-c379-471f-83bb-93b0392093aa').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummarySexualHealthOlder',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='02048954-e9d7-424e-8c7b-6a3c495d7ce4').item.where(linkId='e9936322-e6fe-4cf7-ab61-22846a8fbb95').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryEyeHealth',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='961da481-1698-4a1d-962b-a9c2185e335a').item.where(linkId='8dcdc04c-7655-4b47-88eb-8425f0cdc0d0').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryEarHealthHearing',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='de71bbd0-178c-4974-9c75-55d5a48c66f7').item.where(linkId='ac87b23a-b022-4d62-9e82-1c56583bca34').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryOralDentalHealth',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='bde9ab00-a20f-4a7c-9266-11f53f60c65f').item.where(linkId='875574fa-9769-42ca-8381-9e80c3e5233d').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummarySkin',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='7d4772cb-a1cd-49d9-853f-883ccd8343a6').item.where(linkId='88d23fa4-df88-43ab-a1d0-69315d55c3bf').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryImmunisation',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='205677d6-17c7-4285-a7c4-61aa02b6c816').item.where(linkId='bcd1c9f2-889e-41e5-8c2b-a70221c5cec5').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryExamination',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='c587e3b6-b91a-40dc-9a16-179342d001e9').item.where(linkId='fcbfa6e1-c101-4675-969d-aa11027859c2').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryAbsoluteCVDRisk',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='d95abe99-8ef2-4b97-bc88-a2901e2ebc9c').item.where(linkId='f8022f3f-21fe-42c0-8abd-95f24e2e37e5').answer.value"
            }
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/variable',
            valueExpression: {
              name: 'HealthPrioritiesSummaryInvestigations',
              language: 'text/fhirpath',
              expression:
                  "item.where(linkId='918f7f32-cdaf-4742-b33a-8254eda2d8bd').item.where(linkId='96a8d946-6078-4c85-9de8-3bf18d2c8150').answer.value"
            }
          }
        ],
        linkId: 'fd5af92e-c248-497a-8007-ee0952ccd4d9',
        type: 'group',
        item: [
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: '2e82032a-dc28-45f2-916e-862303d39fe5',
            text: 'About the health check',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-1',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-1',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-1',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-1',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  }
                ],
                linkId: '3da318f1-a5dd-4c8f-b258-99d83872a4f2',
                text: 'Eligible for health check',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNoNA',
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-display-category',
                              code: 'instructions'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '04f00512-888b-424e-ba76-9bd6fd8da682',
                    text: 'not claimed 715 or 228 in past nine months',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '5960c096-d5f7-4745-bd74-44ff2775bde9',
                text: 'Date of last health check',
                type: 'date',
                repeats: false
              },
              {
                linkId: 'MarkComplete-1',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: '1016f79d-9756-4daf-b6ee-29add134b34f',
            text: 'Consent',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-30',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-30',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-30',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-30',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  }
                ],
                linkId: 'd1e1ab3d-1c6c-430b-8ae7-af56b8f0af55',
                text: 'Consent given after discussion of process and benefits of a health check',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNoNA'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  }
                ],
                linkId: '7fa8bc57-f3f9-4ddc-bf9b-12a9b9885dbd',
                text: 'Consent given by parent/primary carer after discussion of process and benefits of a health check',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNoNA'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 24'
                    }
                  }
                ],
                linkId: '80a6a405-49a4-44fb-bff3-212902096b95',
                text: 'Parent/primary caregiver present',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'c72933c7-349f-4fef-94ff-c424c69da6f3',
                    text: 'Parent/primary caregiver is present for health check?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: 'b7d116f9-0425-4cf1-8cde-fbf4dfaee550',
                    text: 'Relationship to child',
                    type: 'string',
                    enableWhen: [
                      {
                        question: 'c72933c7-349f-4fef-94ff-c424c69da6f3',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: true
                  }
                ]
              },
              {
                linkId: 'd8c88bff-75ea-476f-8f83-e9b72fc9e1a0',
                text: 'Consent for sharing of information',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '057483ce-f265-46df-a1c5-7a18d492c1ba',
                    text: 'Consent given for sharing of information with relevant healthcare providers?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: '43517c44-5cd2-4d9a-9f18-d6bf8124f4ae',
                    text: 'Who/details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '057483ce-f265-46df-a1c5-7a18d492c1ba',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: 'today()'
                    }
                  }
                ],
                linkId: '84162f36-f4af-4509-b178-ef2a3849d0b6',
                text: 'Date',
                type: 'date',
                required: true,
                repeats: false
              },
              {
                linkId: '0f92eb2d-4629-4215-96f8-46722a2efa73',
                text: 'Doctor',
                type: 'string',
                repeats: false
              },
              {
                linkId: '8b94a129-3aab-4d13-bb6d-7a748f5c41e5',
                text: 'Nurse',
                type: 'string',
                repeats: false
              },
              {
                linkId: '2a517291-e2f1-4f66-ad1f-ae5b091d2f8a',
                text: 'Aboriginal and/or Torres Strait Islander Health Worker / Health Practitioner',
                type: 'string',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                    valueString: 'Other, please specify'
                  }
                ],
                linkId: '5bbfb4a3-a667-4ef2-98c2-76e76da55c03',
                text: 'Location of health check',
                type: 'open-choice',
                repeats: false,
                answerOption: [
                  {
                    valueCoding: {
                      system: 'http://snomed.info/sct',
                      code: '257585005',
                      display: 'Clinic'
                    }
                  },
                  {
                    valueCoding: {
                      system: 'http://snomed.info/sct',
                      code: '264362003',
                      display: 'Home'
                    }
                  },
                  {
                    valueCoding: {
                      system: 'http://snomed.info/sct',
                      code: '257698009',
                      display: 'School'
                    }
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                    valueString: 'Other, please specify'
                  }
                ],
                linkId: '9a51c056-021d-445d-8eaa-2123a69aa9c2',
                text: 'Location of health check',
                type: 'open-choice',
                repeats: false,
                answerOption: [
                  {
                    valueCoding: {
                      system: 'http://snomed.info/sct',
                      code: '257585005',
                      display: 'Clinic'
                    }
                  },
                  {
                    valueCoding: {
                      system: 'http://snomed.info/sct',
                      code: '264362003',
                      display: 'Home'
                    }
                  },
                  {
                    valueCoding: {
                      system: 'http://snomed.info/sct',
                      code: '413817003',
                      display: 'Early learning centre'
                    }
                  }
                ]
              },
              {
                linkId: 'MarkComplete-30',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            linkId: '5b224753-9365-44e3-823b-9c17e7394005',
            text: 'Patient Details',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-32',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-32',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-32',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-32',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "(%patient.name.where(use='official').select((family | (given | prefix).join(' ')).join(', ') | text) | %patient.name.select((family | (given | prefix).join(' ')).join(', ') | text)).first()"
                    }
                  }
                ],
                linkId: '17596726-34cf-4133-9960-7081e1d63558',
                text: 'Name',
                type: 'string',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%patient.birthDate'
                    }
                  }
                ],
                linkId: '90ad8f16-16e4-4438-a7aa-b3189f510da2',
                text: 'Date of birth',
                type: 'date',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          'iif(today().toString().select(substring(5,2) & substring(8,2)).toInteger() > %patient.birthDate.toString().select(substring(5,2) & substring(8,2)).toInteger(), today().toString().substring(0,4).toInteger() - %patient.birthDate.toString().substring(0,4).toInteger(), today().toString().substring(0,4).toInteger() - %patient.birthDate.toString().substring(0,4).toInteger() - 1)'
                    }
                  }
                ],
                linkId: 'e2a16e4d-2765-4b61-b286-82cfc6356b30',
                text: 'Age',
                type: 'integer',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%patient.gender'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  }
                ],
                linkId: '418e4a02-de77-48a0-a92a-fe8fcc52b1aa',
                text: 'Gender',
                type: 'choice',
                repeats: false,
                answerValueSet: 'http://hl7.org/fhir/ValueSet/administrative-gender'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%patient.extension.where(url='http://hl7.org.au/fhir/StructureDefinition/indigenous-status').value"
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  }
                ],
                linkId: '8acde9f8-7a91-4f0c-9216-38531ec984ef',
                text: 'Aboriginal and/or Torres Strait Islander status',
                type: 'choice',
                repeats: false,
                answerValueSet: '#AboriginalTorresStraitIslander'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 24'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'c8852db9-efe9-4102-96db-cef3a8be0a5f',
                text: 'Parents/primary carer/s',
                type: 'choice',
                repeats: true,
                answerValueSet: '#PrimaryCarerParentGrandparent'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 24'
                    }
                  }
                ],
                linkId: '7089c48e-4216-4089-a548-034cd585e4da',
                text: 'Other family',
                type: 'string',
                repeats: true,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '70c45932-99dc-42a3-9650-4683892a0892',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 24'
                    }
                  }
                ],
                linkId: '42b1f5e0-bf4a-47d9-86a4-f2fe946ac01f',
                text: 'Other',
                type: 'string',
                repeats: true,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'dcbd3a54-9b68-4486-bf30-f6f1723bc39c',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '06737e46-e880-4037-9a2c-bcd278cd70ba',
                text: 'Parents/primary carer/s details',
                type: 'group',
                repeats: true,
                item: [
                  {
                    linkId: 'cc20ce96-af06-4cd7-aa9b-c2601a6169ad',
                    text: 'Name of parent/primary carer',
                    type: 'string',
                    repeats: false
                  },
                  {
                    linkId: '372d79bb-9d0b-42d2-a98c-cbe332bd3745',
                    text: 'Relationship to child',
                    type: 'string',
                    repeats: false
                  }
                ]
              },
              {
                linkId: 'f1262ade-843c-4eba-a86d-51a9c97d134b',
                text: 'Home address',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%patient.address.extension('http://hl7.org.au/fhir/StructureDefinition/no-fixed-address').value"
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '311d83bb-f22e-4f60-9b50-b6e38dd2059b',
                    definition:
                        'http://hl7.org.au/fhir/StructureDefinition/au-address#Address.extension:noFixedAddress',
                    text: 'No fixed address',
                    type: 'boolean',
                    repeats: false
                  },
                  {
                    linkId: '4e0dc185-f83e-4027-b7a8-ecb543d42c6d',
                    text: 'Address',
                    type: 'group',
                    enableWhen: [
                      {
                        question: '311d83bb-f22e-4f60-9b50-b6e38dd2059b',
                        operator: '!=',
                        answerBoolean: true
                      }
                    ],
                    repeats: true,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: "%patient.address.select(line.join(', '))"
                            }
                          }
                        ],
                        linkId: '2fee2d51-7828-4178-b8c1-35edd32ba338',
                        definition:
                            'http://hl7.org.au/fhir/StructureDefinition/au-address#Address.line',
                        text: 'Street address',
                        type: 'string',
                        repeats: true
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '%patient.address.city'
                            }
                          }
                        ],
                        linkId: 'ddb65ed1-f4b2-4730-af2a-2f98bc73c76f',
                        definition:
                            'http://hl7.org.au/fhir/StructureDefinition/au-address#Address.city',
                        text: 'City',
                        type: 'string',
                        repeats: false
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '%patient.address.state'
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'drop-down'
                                }
                              ]
                            }
                          }
                        ],
                        linkId: 'd9a1236c-8d6e-4f20-a12a-9d5de5a1d0f6',
                        definition:
                            'http://hl7.org.au/fhir/StructureDefinition/au-address#Address.state',
                        text: 'State',
                        type: 'choice',
                        repeats: false,
                        answerValueSet:
                            'https://healthterminologies.gov.au/fhir/ValueSet/australian-states-territories-2'
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '%patient.address.postalCode'
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/regex',
                            valueString: "matches('^[0-9]{4}$')"
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/entryFormat',
                            valueString: '####'
                          }
                        ],
                        linkId: '3f61a1ea-1c74-4f52-8519-432ce861a74f',
                        definition:
                            'http://hl7.org.au/fhir/StructureDefinition/au-address#Address.postalCode',
                        text: 'Postcode',
                        type: 'string',
                        repeats: false
                      }
                    ]
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: "%patient.telecom.where(system = 'phone' and use = 'home').value"
                    }
                  }
                ],
                linkId: '9541f0b0-f5ba-4fe7-a8e9-ad003cef897b',
                text: 'Home phone',
                type: 'string',
                repeats: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: "%patient.telecom.where(system = 'phone' and use = 'mobile').value"
                    }
                  }
                ],
                linkId: '4037a02b-4a85-40e0-9be6-5b17df1aac56',
                text: 'Mobile phone',
                type: 'string',
                repeats: true
              },
              {
                linkId: 'c22390d3-1be6-4fd1-b775-6443b7239a6b',
                text: 'Emergency contact',
                type: 'group',
                repeats: true,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%patient.contact.where(relationship.coding.code = 'C').name.select(given.first() | family).join(' ')"
                        }
                      }
                    ],
                    linkId: 'd7f2dd75-20c8-480f-8c22-71d604ebee8d',
                    text: 'Name',
                    type: 'string',
                    repeats: false
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age <= 12'
                        }
                      }
                    ],
                    linkId: 'aa35d559-f45b-4d35-9453-dd02e4a790f3',
                    text: 'Relationship to child',
                    type: 'string',
                    repeats: false
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age > 12'
                        }
                      }
                    ],
                    linkId: '27099697-d6d1-42c0-bb0a-5e9ff7372a96',
                    text: 'Relationship to patient',
                    type: 'string',
                    repeats: false
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%patient.contact.where(relationship.coding.code = 'C').telecom.value"
                        }
                      }
                    ],
                    linkId: '626e3723-6310-4b99-81c1-525676b027c8',
                    text: 'Phone',
                    type: 'string',
                    repeats: true
                  }
                ]
              },
              {
                linkId: 'df1475ea-bf7e-4bf0-a69f-7f9608c3ed3c',
                text: 'Medicare number',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%patient.identifier.where(type.coding.where(system='http://terminology.hl7.org/CodeSystem/v2-0203' and code='MC')).value.substring(0,10)"
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/regex',
                        valueString: "matches('^[0-9]{10}$')"
                      }
                    ],
                    linkId: 'eb2a59ed-9632-4df1-b5b1-1e85c3b4b7cf',
                    text: 'Number',
                    type: 'string',
                    repeats: false
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%patient.identifier.where(type.coding.system='http://terminology.hl7.org/CodeSystem/v2-0203' and type.coding.code='MC').value.substring(10,1)"
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/regex',
                        valueString: "matches('^[0-9]{1}$')"
                      }
                    ],
                    linkId: 'd6253253-a124-494e-a1d8-7ce02c69ec11',
                    text: 'Reference number',
                    type: 'string',
                    repeats: false
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%patient.identifier.where(type.coding.system='http://terminology.hl7.org/CodeSystem/v2-0203' and type.coding.code='MC').period.end.toString()"
                        }
                      }
                    ],
                    linkId: 'c520e213-5313-42c3-860a-d30206620290',
                    text: 'Expiry',
                    type: 'string',
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%patient.identifier.where(type.coding.system='http://terminology.hl7.org/CodeSystem/v2-0203' and type.coding.code='PEN').value"
                    }
                  }
                ],
                linkId: 'c1e4e967-c0aa-4280-b5d4-ab1f375ed9ac',
                text: 'Pensioner Card Number',
                type: 'string',
                repeats: false,
                maxLength: 10
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%patient.identifier.where(type.coding.system='http://terminology.hl7.org/CodeSystem/v2-0203' and type.coding.code='HC').value"
                    }
                  }
                ],
                linkId: 'a7e97574-3cea-4dfa-bef2-2665e7748364',
                text: 'Health Care Card Number',
                type: 'string',
                repeats: false,
                maxLength: 10
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  }
                ],
                linkId: '83814495-3a81-43f4-88df-42186cce516a',
                text: 'Registered for Closing the Gap PBS Co-payment Measure (CTG)',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNoNA'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  }
                ],
                linkId: 'e63547c6-1623-412f-963f-5f1ebf23563f',
                text: 'Child has a birth certificate',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNoNA'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  }
                ],
                linkId: 'a8143230-b30d-4b85-9805-5f2f73f2dffa',
                text: 'My Aged Care',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '7165c072-e3d8-4564-9d1d-d17f6807787c',
                    text: 'Registered for My Aged Care',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: '04e50521-dc85-4744-b7ab-6f8682aacb11',
                    text: 'My Aged Care Number',
                    type: 'string',
                    enableWhen: [
                      {
                        question: '7165c072-e3d8-4564-9d1d-d17f6807787c',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '2bfe50cb-7913-4f31-bce2-763c17ff8b1a',
                text: 'National Disability Insurance Scheme',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '924b4500-53ac-4c4e-831b-7ab5569ff981',
                    text: 'Registered for NDIS',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: '7379a0fd-d95b-4ecb-a781-9f43d1394f10',
                    text: 'NDIS Number',
                    type: 'string',
                    enableWhen: [
                      {
                        question: '924b4500-53ac-4c4e-831b-7ab5569ff981',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age <= 49).intersect(%age > 12)'
                    }
                  }
                ],
                linkId: '9bc882bc-e989-4600-9587-8089fb757641',
                text: 'Children',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'e90b436b-2751-4e07-a40c-adfe951b6528',
                    text: 'Do you have children?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: '241f5fca-f61a-49bd-8972-52613c0e6d15',
                    text: 'Number of children',
                    type: 'integer',
                    enableWhen: [
                      {
                        question: 'e90b436b-2751-4e07-a40c-adfe951b6528',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  },
                  {
                    linkId: '74ce4c60-31d6-4e78-9056-579937379451',
                    text: 'Number of children in your care',
                    type: 'integer',
                    enableWhen: [
                      {
                        question: 'e90b436b-2751-4e07-a40c-adfe951b6528',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: '2b5ae784-4341-4172-875d-1698cc8069f0',
                text: "Someone's carer",
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'a08271f1-194b-4fe9-91f9-4f3398858eb0',
                    text: 'Are you responsible for caring for someone else?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: '4c14b158-3ae4-4994-8446-76e02640702c',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'a08271f1-194b-4fe9-91f9-4f3398858eb0',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  }
                ],
                linkId: '6c80c675-1320-4ca3-ae3f-51ad173da741',
                text: 'Your carer',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'd05558fb-a3cc-4bd6-b803-b672b36b9c51',
                    text: 'Do you have a carer?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: 'b9991e7e-ce03-465d-b4b0-5a1725b24e02',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'd05558fb-a3cc-4bd6-b803-b672b36b9c51',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '3494631c-6b56-46dc-abf7-a17bfc1d025f',
                text: 'Providers',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '41210be5-d441-4c44-b9c2-8dd94a44cbb4',
                    text: 'Are name and contact details of other key providers (eg case workers, support services) up to date?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: '6733d6ec-5b6b-4ee2-a21e-0e9474c2b22b',
                    text: 'Details',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  }
                ],
                linkId: '38f81a73-447f-4ecd-a8eb-6eccd9dee050',
                text: 'Advance care planning',
                type: 'group',
                repeats: false,
                item: [
                  {
                    linkId: 'c023ef16-b554-4ed9-8993-1331e5f5a3b4',
                    text: 'Enduring Power of Attorney',
                    type: 'group',
                    repeats: false,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'radio-button'
                                }
                              ]
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                            valueCode: 'horizontal'
                          }
                        ],
                        linkId: '036eace9-ea83-46ec-9d01-f2093f710816',
                        text: 'Enduring Power of Attorney',
                        type: 'choice',
                        repeats: false,
                        answerValueSet: '#YesNoNA'
                      },
                      {
                        linkId: '83518215-7151-4365-b745-d7464bbb9528',
                        text: 'Discussed today',
                        type: 'text',
                        repeats: false
                      }
                    ]
                  },
                  {
                    linkId: 'c4f68251-26af-462f-879a-a69b449066ff',
                    text: 'Advance Health Directive',
                    type: 'group',
                    repeats: false,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'radio-button'
                                }
                              ]
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                            valueCode: 'horizontal'
                          }
                        ],
                        linkId: 'b0632039-c12b-4748-9e94-52073590c0ba',
                        text: 'Advance Health Directive',
                        type: 'choice',
                        repeats: false,
                        answerValueSet: '#YesNoNA'
                      },
                      {
                        linkId: 'c4bc2d84-e411-488d-9c0d-761f0377a026',
                        text: 'Discussed today',
                        type: 'text',
                        repeats: false
                      }
                    ]
                  }
                ]
              },
              {
                linkId: 'MarkComplete-32',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                valueString: 'Current priorities'
              },
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: 'b3a3eee2-f340-452e-9d05-d1f54f677b81',
            text: 'Current health/patient priorities',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-5',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-5',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-5',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-5',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: 'dcf182c0-a2bf-46ac-a19b-72e4d24ef24d',
                text: 'What are the important things for you in this health check today?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '3ac0c629-9acc-48af-bafe-6b05dfd06281',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: 'a0c06f8d-3210-480b-9031-7b5eb5bf1dda',
                text: 'Is there anything you are worried about?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '43fb3316-64a4-41dc-b12c-2f3fcee3eb84',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '96f3396e-f5f8-4347-8692-9abdecb97768',
                text: "Is there anything that you are worried about with your child's health or wellbeing?",
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '75b39c42-8a15-4fdf-9129-936072336456',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  }
                ],
                linkId: '17651f83-8476-499c-a5ef-dd4e1a6c9f13',
                text: 'Child Health Book',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '2655e0e1-fe4b-431e-87af-30d4ff1aca76',
                    text: 'Does your child have a Child Health Book?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'a30d0101-06ce-4481-b142-9fa2c091fe4f',
                    text: 'Is it up to date?',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '2655e0e1-fe4b-431e-87af-30d4ff1aca76',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false,
                    answerValueSet: '#YesNo'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: '35b3f6d8-2907-4134-ae55-1e321b908f70',
                text: 'Do you have any specific health goals? Is there anything in particular about your health and wellbeing that you would like to improve?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'bb176839-5cc8-4fb5-a919-0904968418be',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '7cd424e5-7672-4e99-8a99-30b1fb3043fd',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-5',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: '28d5dbe4-1e65-487c-847a-847f544a6a91',
            text: 'Medical history and current problems',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-17',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-17',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-17',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-17',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'wk'
                    }
                  }
                ],
                linkId: 'a10a7375-e9d3-4e71-a47a-282e9ba38ec1',
                text: 'Gestation at birth',
                type: 'decimal',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'f3899852-36c4-441f-9a7d-544ef1617f08',
                    text: 'weeks',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'kg'
                    }
                  }
                ],
                linkId: '29b6d8ea-23b2-4a69-98d9-899198692de7',
                text: 'Birth weight',
                type: 'decimal',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '87cf1ecd-6d1b-4de1-894d-58bd77dcfde1',
                    text: 'kg',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%Condition.entry.resource.code.select(coding.where(system='http://snomed.info/sct').first())"
                    }
                  }
                ],
                linkId: '033db7b3-80da-43e2-9838-88f3d51e5913',
                text: 'Problems',
                type: 'choice',
                repeats: true,
                answerValueSet: '#MedicalHistoryShortListInfants'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age > 5).intersect(%age <= 12)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%Condition.entry.resource.code.select(coding.where(system='http://snomed.info/sct').first())"
                    }
                  }
                ],
                linkId: '384ab440-10ed-4ac1-89da-cd7d24f87a95',
                text: 'Problems',
                type: 'choice',
                repeats: true,
                answerValueSet: '#MedicalHistoryShortListPrimarySchool'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age > 12).intersect(%age <= 24)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%Condition.entry.resource.code.select(coding.where(system='http://snomed.info/sct').first())"
                    }
                  }
                ],
                linkId: 'c24ae0d2-8932-4b87-9b7e-a644b5eb2874',
                text: 'Problems',
                type: 'choice',
                repeats: true,
                answerValueSet: '#MedicalHistoryShortListAdolescents'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 24'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%Condition.entry.resource.code.select(coding.where(system='http://snomed.info/sct').first())"
                    }
                  }
                ],
                linkId: 'bba27ef5-05c5-4e9c-bc9f-cf42091e99cb',
                text: 'Problems',
                type: 'choice',
                repeats: true,
                answerValueSet: '#MedicalHistoryShortListAdultsAndOlderPeople'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'autocomplete'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%Condition.entry.resource.code.select((coding.where(system='http://snomed.info/sct') | coding.where(system!='http://snomed.info/sct').first() | text ).first())"
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Other relevant medical history'
                  }
                ],
                linkId: '736f2a51-e04d-4e7f-aef1-c47f3a1f4e3c',
                text: 'Other relevant medical history, operations, hospital admissions, etc',
                type: 'open-choice',
                repeats: true,
                answerValueSet: '#MedicalHistory'
              },
              {
                linkId: 'f00def30-35dd-401a-9a38-12602bd3b8b1',
                text: 'Provide details of identified problems',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'gtable'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemPopulationContext',
                    valueExpression: {
                      name: 'ConditionRepeat',
                      language: 'text/fhirpath',
                      expression: '%Condition.entry.resource'
                    }
                  }
                ],
                linkId: '92bd7d05-9b5e-4cf9-900b-703f361dad9d',
                text: 'Medical history and current problems list',
                type: 'group',
                repeats: true,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'autocomplete'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%ConditionRepeat.code.select((coding.where(system='http://snomed.info/sct') | coding.where(system!='http://snomed.info/sct').first() | text ).first())"
                        }
                      }
                    ],
                    linkId: '59b1900a-4f85-4a8c-b9cd-3fe2fd76f27e',
                    text: 'Condition',
                    type: 'open-choice',
                    answerValueSet: '#MedicalHistory'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'drop-down'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%ConditionRepeat.clinicalStatus.coding'
                        }
                      }
                    ],
                    linkId: '88bcfad7-386b-4d87-b34b-2e50482e4d2c',
                    text: 'Clinical Status',
                    type: 'choice',
                    answerValueSet: '#condition-clinical'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%ConditionRepeat.onset.ofType(dateTime)'
                        }
                      }
                    ],
                    linkId: '6ae641ad-95bb-4cdc-8910-5a52077e492c',
                    text: 'Onset Date',
                    type: 'dateTime'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%ConditionRepeat.recordedDate'
                        }
                      }
                    ],
                    linkId: '18b9e159-2ed7-4047-82b7-deb2a171de4f',
                    text: 'Recorded Date',
                    type: 'dateTime'
                  }
                ]
              },
              {
                linkId: '62774152-8a6e-4449-af9f-87bdce8b9bf5',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-17',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              },
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                valueString: 'Regular medications'
              }
            ],
            linkId: '7dfe7c6a-ca7f-4ddf-9241-a7b918a9695a',
            text: 'Regular medications: check if still required, appropriate dose, understanding of medication and adherence',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-23',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-23',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-23',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-23',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Does your child take any regular medications?'
                  }
                ],
                linkId: '6eb59145-ed9a-4184-af83-3506d47e4d4e',
                text: 'Does your child take any regular medications (prescribed, over-the-counter, traditional, complementary and alternative)?',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNo'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Do you take any regular medications?'
                  }
                ],
                linkId: '3a2d27b6-e918-4df5-aca9-b374fcf9faad',
                text: 'Do you take any regular medications (prescribed, over-the-counter, traditional, complementary and alternative)?',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNo'
              },
              {
                linkId: '874ec8db-95c9-4cc0-95db-e45edaa3cd12',
                text: 'Up to date in the health record?',
                type: 'boolean',
                enableWhen: [
                  {
                    question: '6eb59145-ed9a-4184-af83-3506d47e4d4e',
                    operator: '=',
                    answerCoding: {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                      code: 'Y'
                    }
                  },
                  {
                    question: '3a2d27b6-e918-4df5-aca9-b374fcf9faad',
                    operator: '=',
                    answerCoding: {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                      code: 'Y'
                    }
                  }
                ],
                enableBehavior: 'any',
                required: true,
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Understanding and adherence checked'
                  }
                ],
                linkId: '36290837-ad70-48b2-9c66-31533fec918b',
                text: 'Medication understanding and adherence has been checked with patient',
                type: 'boolean',
                enableWhen: [
                  {
                    question: '6eb59145-ed9a-4184-af83-3506d47e4d4e',
                    operator: '=',
                    answerCoding: {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                      code: 'Y'
                    }
                  },
                  {
                    question: '3a2d27b6-e918-4df5-aca9-b374fcf9faad',
                    operator: '=',
                    answerCoding: {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                      code: 'Y'
                    }
                  }
                ],
                enableBehavior: 'any',
                required: true,
                repeats: false
              },
              {
                linkId: 'aa9ff2ed-bcd2-406d-a9ff-89c201df2605',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-23',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: 'd4e4db07-a795-4a30-bd0f-9c109f96a22b',
            text: 'Allergies/adverse reactions',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-3',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-3',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-3',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-3',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  }
                ],
                linkId: '8a1d70bf-a68b-4b7b-be73-ba6956fccc78',
                text: 'Up to date in the health record?',
                type: 'boolean',
                repeats: false
              },
              {
                linkId: '3e689aeb-69a1-4a9b-93bd-50377511dd9b',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-3',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: '01f67f0b-e3be-48d8-a2ad-4c54f469cd13',
            text: 'Family history',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-9',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-9',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-9',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-9',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '532e09ea-2c2d-48c6-81f8-e23380b329a0',
                text: 'Provide relevant family history information',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '9bc2daf9-6d13-4747-90c3-4a1862f6199a',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Provide relevant family history information'
                  }
                ],
                linkId: 'df5b2081-a373-48ee-acab-96225dad3c1d',
                text: 'Provide relevant family history information (including diabetes, heart disease, cancer, mental health)',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '8f801e02-bfe8-437f-ba51-07c8f3631a0e',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '49ee4583-c608-41d4-a1e9-c06cf4292369',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-9',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age > 12'
                }
              }
            ],
            linkId: '0a3c9c93-5836-4a5b-93e5-d7de559e053a',
            text: 'Social and emotional wellbeing',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-27',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-27',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-27',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-27',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: 'c736d065-88f6-49c3-a5a4-91a2bd7a54bb',
                text: 'Stressful life events',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'e7297156-cfed-4437-b877-c345f744168b',
                    text: 'Have there been any particular stressful life events that are impacting on you/your health lately?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '4c3427ce-062f-4f62-b566-2decb506a9cb',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'e7297156-cfed-4437-b877-c345f744168b',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 24'
                    }
                  }
                ],
                linkId: '7d783b71-7303-441b-822a-14e11a740038',
                text: 'Social and emotional wellbeing assessment: consider tools such as Aboriginal and Torres Strait Islander Youth Social Emotional Wellbeing assessment question guide or HEEADSSS',
                type: 'display'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 24'
                    }
                  }
                ],
                linkId: '9e991b80-7080-40d5-9ad9-447dc47e3a68',
                text: 'Consider conversation about social connection, which could include questions about sports/hobbies/clubs/other activities',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '2740f866-2cd7-41a1-912c-ba29cbe7a582',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: 'b5a00aad-2a8b-4ac3-87b2-4a5920ca22ee',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-27',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age <= 12'
                }
              },
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                valueString: 'Social history'
              }
            ],
            linkId: 'a5cc8a8f-89cf-470c-a6bd-ce9da2f64ee9',
            text: "Social history: Information about family and child's living arrangements",
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-28',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-28',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-28',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-28',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '1bb673a4-40f9-41c3-ad04-66c9f38fdc1b',
                text: 'Who lives in your household? / Who does the child live with?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '5b8134d2-f87e-4449-bfc1-eac1d8d3d58b',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '934d105e-a4d6-4926-9b64-55bb1049d839',
                text: 'Stressful life events',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '062f5234-686a-4bf3-afcd-3fcd988afd6c',
                    text: 'Have there been any stressful life events that would cause you or your child to be upset?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '1ea0a898-d680-4a5d-a0f1-91b57eb77a91',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '062f5234-686a-4bf3-afcd-3fcd988afd6c',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  }
                ],
                linkId: '272af1cb-4309-4227-bab4-a6cc9fb47635',
                text: 'If indicated, ask about depression and other mental health concerns',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '4048e200-1c09-441d-b25d-f8a946fac411',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '76d51512-b94a-4092-b3ae-a656fbb9c360',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-28',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age > 12'
                }
              }
            ],
            linkId: '819b3305-bf93-4502-9986-242ea2ae5f43',
            text: 'Home and family',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-12',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-12',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-12',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-12',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '29bb209f-6dfc-4ed0-8b8d-741016c0ac61',
                text: 'Who do you live with?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'f3e122f3-77ff-4e07-a45b-1511a85a9a83',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '64b979b6-cfc1-4024-868c-94e7be90d12b',
                text: 'Housing stability',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'a7542da8-aad6-4a80-8b5b-806ca11d68d2',
                    text: 'Do you have stable housing?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '476dae02-d0e8-4128-81a1-7ad71dd06e97',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'a7542da8-aad6-4a80-8b5b-806ca11d68d2',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'N'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '367ac5dd-07fa-4bda-a775-d9f38b15affd',
                text: 'Home safety',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '6f73d1ee-dd8e-419a-9142-ede367200e3b',
                    text: 'Do you feel safe at home?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '9bd5f571-8cbf-4c25-975c-5fc8395b75f5',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '6f73d1ee-dd8e-419a-9142-ede367200e3b',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'N'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '08d2e80e-3bb4-4f67-8b1c-090b1ace225a',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-12',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age <= 12'
                }
              }
            ],
            linkId: '3e7d7246-98f8-4803-b063-8405ac30b086',
            text: 'Learning and development',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-15',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-15',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-15',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-15',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  }
                ],
                linkId: '818c9aaa-1b00-4c76-9971-49df74edff7a',
                text: "Is there anything that you are worried about with your child's development?",
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'ca6113f5-b6f6-413d-b9e1-0a34491f4be3',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  }
                ],
                linkId: 'e7ef5692-25e6-4598-aa08-d0107e21fe31',
                text: "Is there anything that you are worried about with your child's learning?",
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'c7c5fb28-c72b-4804-b7ec-c52fe754b689',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: 'fc658147-3fad-42a0-9c10-c14fbd30775e',
                text: "Is there anything that you are worried about with your child's behaviour?",
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'a3327fc8-663d-402b-8910-2b15f2a3d500',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '582fcfe5-c7a4-4847-9881-815452b9eafe',
                text: "Is there anything that you are worried about with your child's sleep?",
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '44e0023c-1b92-455f-a501-6006cf412fc5',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  }
                ],
                linkId: '335f4c10-a6e6-455b-8a7e-2962158f5183',
                text: 'What childcare/early learning centre/kindergarten does your child go to? How often?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '20ae39db-7bb5-4af4-ac59-3298d20719d8',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  }
                ],
                linkId: 'e5b886ad-840e-4f01-af04-55c5ea7f215d',
                text: 'How often does your child miss childcare/early learning centre/kindergarten?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '61ff302c-9ef0-414c-a9f8-e2b8d119373c',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  }
                ],
                linkId: 'f0e0ea74-cffc-46a5-8554-67e8fcc667f1',
                text: 'Is there anything you are worried about at school?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '520a4544-a48b-4864-8cfd-6af263756f1b',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  }
                ],
                linkId: '73a40641-04c9-4da4-813e-a8b9ae3a2ecf',
                text: 'How often does your child miss school?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '2e24a8de-c23d-409a-a5d6-96345177e105',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  }
                ],
                linkId: '47f09b28-9eea-4f8c-8d3c-7efef0504728',
                text: 'Is your child having any difficulties making friends?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'f95dd477-98a2-4534-b8ab-5a74d1b46502',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  }
                ],
                linkId: '9371dddc-49f4-4a8f-a9dc-a0e128f99636',
                text: "Are there any other concerns about your child's learning and development",
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'f513b077-5714-4b14-b44f-30a979509651',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '5ab80929-5901-431d-bf68-67d532f5fa58',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-15',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '(%age > 12).intersect(%age < 50)'
                }
              }
            ],
            linkId: '5437e30d-8a0a-4785-974e-00a10d2a1df0',
            text: 'Learning and work',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-33',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-33',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-33',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-33',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age < 25'
                    }
                  }
                ],
                linkId: '0e30e9b4-ec83-44ea-88ab-47963e52a2d7',
                text: 'Learning',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '0cd9e27b-1e98-41af-917b-0c6ee21c0819',
                    text: 'Are you studying at school/uni?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: '18bdfa42-9845-4c6e-b737-843b14d54641',
                    text: 'Details',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 25'
                    }
                  }
                ],
                linkId: 'c0ba8a79-a9c5-40cc-b0c2-041e736784e9',
                text: 'Learning',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '4a81afc0-f0da-49e1-b8cc-c19cb0f5f4e9',
                    text: 'Are you studying?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    linkId: '1c648524-558e-4d24-bd83-c9f5cd35e97b',
                    text: 'Details',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                linkId: 'ccf6f0b0-57ae-473e-9929-2a09184c8a14',
                text: 'Work',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'aaead1e2-ea54-4979-be0a-647e61ab59a9',
                    text: 'Are you working?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNoNA'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                        valueString: 'Details'
                      }
                    ],
                    linkId: '749a4e1e-35ab-4f37-ab28-cb3f0830bb2a',
                    text: 'Details (occupation including occupational hazards, study, training, disability, etc)',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                linkId: '3569e514-a74b-4343-b31b-3395e58d991a',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-33',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age >= 50'
                }
              }
            ],
            linkId: 'dec713ae-246a-4961-95c9-0626bfebfed2',
            text: 'Work',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-16',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-16',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-16',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-16',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '2bfc99a5-677c-4aea-a1ad-c37a181a3733',
                text: 'Work',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '4c68ff3e-0e73-4ea2-b295-5057deaa590e',
                    text: 'Are you working?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                        valueString: 'Details'
                      }
                    ],
                    linkId: '794fc001-6799-4a51-9a80-f2ed7c685a42',
                    text: 'Details (occupation including occupational hazards, study, training, disability, etc)',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                linkId: 'ed6f7800-e22a-4639-9d11-faf845513500',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-16',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age > 12'
                }
              }
            ],
            linkId: '9559242e-9ffe-4e1f-a9fc-86d1fa62c4b9',
            text: 'Mood',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-19',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-19',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-19',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-19',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: 'b3c510a7-bfd1-4ebe-8755-9f05e7a742ba',
                text: 'How have you been feeling lately?',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'e440f97d-b10a-472a-9e5b-4fcf7614ee08',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Ask about depression and complete risk assessment'
                  }
                ],
                linkId: 'b4245702-afe5-4e4e-a102-1d3ceb4ad7c2',
                text: 'If indicated, ask about depression (consider screening tools, eg aPHQ-9, K5 or K10) and complete risk assessment',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'f9640e61-3b19-4d07-95e2-34daa44881ab',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '6a99da48-366b-40c9-97ec-d0f2d52964a8',
                text: 'Explore other mental health concerns as indicated',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '8b747e00-0f5d-4ba1-98c3-3d8e592f4c22',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: 'db9a8650-42a2-4bd3-8066-7e09394120d5',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-19',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age >= 50'
                }
              }
            ],
            linkId: '1bd58e7b-2cb7-45fb-965f-d5fa33d0bb4c',
            text: 'Memory and thinking',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-18',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-18',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-18',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-18',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '64fd0c95-b57b-4319-bf40-ad77d10a9832',
                text: 'Personal concerns about your memory or thinking',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'e29701be-2b79-471d-a42e-7e3830459080',
                    text: 'Do you have any worries about your memory or thinking?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '69985e2e-4619-42fa-a111-e6fb3118ef74',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'e29701be-2b79-471d-a42e-7e3830459080',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '44da9ba8-4636-4eaa-8bb1-aaa65f117fab',
                text: 'Family concerns about your memory or thinking',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '06a67326-9e3d-4c4c-b271-af5b168d077c',
                    text: 'Does anyone in your family have any worries about your memory or thinking?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '43d2cb6c-29a7-4293-a6c8-87a228a82e19',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '06a67326-9e3d-4c4c-b271-af5b168d077c',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '4ebb3c30-936b-4932-a330-f1e643b5ccd4',
                text: 'If any concerns are raised and/or high risk for cognitive impairment identified, follow up with cognitive screening (eg clock test, GPCOG, KICA-Cog, MMSE)',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'c563f52d-d3cc-4687-9863-0f1b7d00d942',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '1f0e7fde-e964-4f36-9151-dbdc5e145f94',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-18',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age >= 50'
                }
              }
            ],
            linkId: 'c5da020c-c4f3-437c-b658-ea7e7667514d',
            text: 'Chronic disease associated with ageing',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-4',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-4',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-4',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-4',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Assessment of chronic disease associated with ageing'
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                    valueString:
                        '<div xmlns="http://www.w3.org/1999/xhtml">\r\n    <div>For older people with chronic disease and/or conditions associated with ageing, consider assessing:</div>\r\n    <ul>\r\n      <li>Osteoporosis risk</li>\r\n      <li>Falls risk</li>\r\n      <li>Balance, coordination and mobility</li>\r\n      <li>Pain</li>\r\n      <li>Nutrition</li>\r\n      <li>Regularity of chronic disease management and review</li>\r\n    </ul>\r\n    </div>'
                  }
                ],
                linkId: '12e244c0-2887-4230-8792-9521d4f1ab33',
                text: 'For older people with chronic disease and/or conditions associated with ageing, consider assessing: Osteoporosis risk; Falls risk; Balance, coordination and mobility; Pain; Nutrition; Regularity of chronic disease management and review',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'd6337ce3-ec9a-44e2-a69a-2355025b3e8c',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '7292070b-8944-4a40-bcf6-9aaf1721e986',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-4',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '(%age >= 50).intersect(%age <= 74)'
                }
              }
            ],
            linkId: '9674ffa0-2ad9-4ca3-80e6-e8bb0670a802',
            text: 'Participation in screening programs',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-24',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-24',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-24',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-24',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: 'ed15e82b-803a-4d21-9344-9110b57b2313',
                text: 'Cervical screening (age <=74 years)',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'c1cf9c00-15ef-4b98-bab0-20a5f01b4932',
                    text: 'Cervical screening status',
                    type: 'choice',
                    repeats: false,
                    answerOption: [
                      {
                        valueString: 'Up to date'
                      },
                      {
                        valueString: 'Discussed today'
                      },
                      {
                        valueString: 'Not required'
                      },
                      {
                        valueString: 'Declined'
                      },
                      {
                        valueString: 'Next due'
                      }
                    ]
                  },
                  {
                    linkId: '4e0c55a0-c559-45fd-b165-5aaea3451423',
                    text: 'Cervical screening details',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                linkId: '17ff5354-fe9c-429c-a752-c27a871d4ee7',
                text: 'Breast screening (age <=74 years)',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '29fada07-f981-44cf-8092-61c86365a965',
                    text: 'Breast screening status',
                    type: 'choice',
                    repeats: false,
                    answerOption: [
                      {
                        valueString: 'Up to date'
                      },
                      {
                        valueString: 'Discussed today'
                      },
                      {
                        valueString: 'Not required'
                      },
                      {
                        valueString: 'Declined'
                      },
                      {
                        valueString: 'Next due'
                      }
                    ]
                  },
                  {
                    linkId: 'b63a03c8-2c7b-46a5-8f13-ebc7fb8b91ee',
                    text: 'Breast screening details',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                linkId: 'bb5d56e3-efb9-45fe-854d-e4550b327d26',
                text: 'Bowel cancer screening (age <=74 years)',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '521df1b1-ff36-458b-8f99-e41c2b1685c8',
                    text: 'Bowel cancer screening status',
                    type: 'choice',
                    repeats: false,
                    answerOption: [
                      {
                        valueString: 'Up to date'
                      },
                      {
                        valueString: 'Discussed today'
                      },
                      {
                        valueString: 'Not required'
                      },
                      {
                        valueString: 'Declined'
                      },
                      {
                        valueString: 'Next due'
                      }
                    ]
                  },
                  {
                    linkId: '0d59513c-7a77-4752-9c4e-492a54412731',
                    text: 'Bowel cancer screening details',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                linkId: '70f82c4b-d1f9-44d5-9903-bd7097799c05',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-24',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: 'ae7a3801-9491-4b1f-820c-678236d18f56',
            text: 'Healthy eating',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-11',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-11',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-11',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-11',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '9ac8c78d-9c36-4bf5-8c6e-e48109902dfa',
                text: 'Child eating concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age <= 5'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'e2942894-5537-47a6-ab43-06eb6761f9b5',
                    text: "Is there anything that you are worried about with your child's feeding/eating?",
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age > 5'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '69d92a26-95ac-4556-94da-5b0e09940bfd',
                    text: "Is there anything that you are worried about with your child's eating?",
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'f6907808-3e42-4206-9bf8-ca4082ea4814',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'e2942894-5537-47a6-ab43-06eb6761f9b5',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      },
                      {
                        question: '69d92a26-95ac-4556-94da-5b0e09940bfd',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    enableBehavior: 'any',
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  }
                ],
                linkId: 'ff6a46e6-0812-4718-a854-489b24805925',
                text: 'Breastfeeding history',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '87f4277a-0af8-4bb9-ba2d-cb4e4f3a4548',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  }
                ],
                linkId: 'b5f748d2-1874-4949-a7df-6e233f03135d',
                text: 'Bottle feeding history',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '1792a4b0-640f-4d41-8704-c069179539bb',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: '9266b946-74b3-4fc2-91ce-df557692e600',
                text: 'Diet or weight concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '646302e9-d384-4943-99bc-11e638641703',
                    text: 'Do you have any worries about your diet or weight?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '1d5c3354-6780-4b6a-b9af-7a17b0386781',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '646302e9-d384-4943-99bc-11e638641703',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  }
                ],
                linkId: 'c4c51d01-7acf-4551-a652-82f9fdf58a6d',
                text: 'Unintended weight loss',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '6dc96b26-cbc5-4434-8f6b-0260196311c2',
                    text: 'Have you lost weight without trying to in the last three months?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'ce71f016-c5e4-4121-abe5-fe0c974c1bba',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '6dc96b26-cbc5-4434-8f6b-0260196311c2',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                    valueString:
                        '<div xmlns="http://www.w3.org/1999/xhtml">\r\n    <div>Document conversation about age-appropriate healthy eating, which could include:</div>\r\n    <ul>\r\n      <li>current diet</li>\r\n      <li>transition to solids</li>\r\n      <li>dietary recommendations re fruit and vegetable intake, iron-rich foods, avoiding sugary drinks</li>\r\n    </ul>\r\n    </div>'
                  }
                ],
                linkId: '9f6adf74-f240-41a2-a509-d216d5308911',
                text: 'Document conversation about age-appropriate healthy eating, which could include: current diet; transition to solids; dietary recommendations re fruit and vegetable intake, iron-rich foods, avoiding sugary drinks',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'd3c0033f-20d0-40ab-b4d5-6eb3f67be492',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                    valueString:
                        '<div xmlns="http://www.w3.org/1999/xhtml">\r\n    <div>Document conversation about health eating which could include:</div>\r\n    <ul>\r\n      <li>current diet including food and drinks</li>\r\n      <li>recommendations about fruit and vegetable intake, water as the main drink, avoiding sugary drinks, avoiding highly processed foods (including supermarket-bought and take-away like KFC, Maccas, etc)</li>\r\n    </ul>\r\n    </div>'
                  }
                ],
                linkId: '7a22a4c4-6611-4687-af00-37c80c3f8fc0',
                text: 'Document conversation about health eating which could include: current diet including food and drinks; recommendations about fruit and vegetable intake, water as the main drink, avoiding sugary drinks, avoiding highly processed foods (including supermarket-bought and take-away like KFC, Maccas, etc)',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '579a1e9e-c679-4411-b78f-0468cd45e1a2',
                    text: 'details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '71e39493-f0b0-4074-934b-604155b349e1',
                text: 'Food availability issues',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '12a41538-5dbd-4c1d-af69-52c59c48b1a9',
                    text: 'Are there any issues about availability of food?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '92908e91-9453-4d22-99eb-23dad580c1cb',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '12a41538-5dbd-4c1d-af69-52c59c48b1a9',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '301789b0-8c6a-470d-8787-0ac6597e3bea',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-11',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age < 50'
                }
              }
            ],
            linkId: '74736baa-455b-41d2-af98-fb65cd463e97',
            text: 'Physical activity and screen time',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-34',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-34',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-34',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-34',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '8c5e737f-820b-47a4-8c8a-27ce1eb18cf4',
                text: 'Physical activity concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '304d0332-9bfd-42dc-a4be-a5122596fb89',
                    text: "Is there anything that you are worried about with your child's level of physical activity?",
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '26707b9a-4e3d-4063-a890-7ec2ff02ced1',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '304d0332-9bfd-42dc-a4be-a5122596fb89',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: 'e24d487b-3dd4-4a6d-a58e-85dfa8ce3f36',
                text: 'Screen time concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '465eacce-f9ee-4022-9186-89065cf01ce2',
                    text: "Is there anything that you are worried about with your child's level of screen time?",
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '13040f64-5cbf-4592-a683-c03527c64ac6',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '465eacce-f9ee-4022-9186-89065cf01ce2',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: 'e9b6ac74-d810-4350-8b41-8ea2e4bd14fc',
                text: 'Physical activity or screen time concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '08320c7a-831b-4237-95e2-d79aee155b90',
                    text: 'Do you have any worries about physical activity or screen time?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '57fa51e3-11c5-43f1-bdf0-73b2b48414c3',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '08320c7a-831b-4237-95e2-d79aee155b90',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: 'a9aaba01-5f11-4d4e-ad39-40b6bef745da',
                text: 'Document conversation about age-appropriate recommendations re physical activity and screen time',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '64c5bab2-575b-4304-bb50-3840bae351ea',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age > 12).intersect(%age <= 24)'
                    }
                  }
                ],
                linkId: 'b2269be8-3ea5-494c-9368-06912b629789',
                text: 'Document conversation about social connection, which could include questions about sports/hobbies/clubs/other activities',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'd35063fc-688b-4fab-ae3a-9aae18806043',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: 'ccbd7fbf-0d40-4cb3-82b3-ad2c7cc7bba2',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-34',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age >= 50'
                }
              }
            ],
            linkId: 'd56234a0-aafd-4c22-96c9-00ead8424f0b',
            text: 'Physical activity',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-21',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-21',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-21',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-21',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '015d986f-89cf-45b0-a753-9a3ab0c4b05b',
                text: 'Physical activity concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'b30d5d21-c6d6-4bb3-aab4-0fdee80b3093',
                    text: 'Do you have any worries about physical activity?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'fd6beb79-ffc3-4879-913b-f42b0ec930ba',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'b30d5d21-c6d6-4bb3-aab4-0fdee80b3093',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: 'eb326905-3709-4088-8491-8b83c97f2da4',
                text: 'Document conversation about recommendations re physical activity',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '10add54e-af14-47b7-ad1a-666692ee3767',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '25b8b8fd-adb1-48ab-aeae-528603668c4b',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-21',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age <= 5'
                }
              }
            ],
            linkId: 'b9a6ce8b-7766-47a5-8e1c-1590a1edbfa8',
            text: 'Red flags early identification guide for children',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-22',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-22',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-22',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-22',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: 'dfbf13b5-e9e1-4f2f-83fc-1b3b9e50c921',
                text: 'This is based on material from the The State of Queensland, Red flags early identification guide (for children aged birth to five years). 2nd edn. South Brisbane, Qld: Child Development Program, Queensland Health, 2016. Available at www.childrens.health.qld.gov.au/wp-content/uploads/PDF/red-flags-a3.pdf [Accessed 2 December 2019]. © Developed by the Child Development Program in conjunction with Brisbane North Primary Health Network. Updated: July 2016.',
                type: 'display'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  }
                ],
                linkId: '0b520b20-98df-4024-b25d-2986f6b96e77',
                text: 'What age group is the child closet to?',
                type: 'choice',
                repeats: false,
                answerOption: [
                  {
                    valueString: '6 months'
                  },
                  {
                    valueString: '9 months'
                  },
                  {
                    valueString: '12 months'
                  },
                  {
                    valueString: '18 months'
                  },
                  {
                    valueString: '2 years'
                  },
                  {
                    valueString: '3 years'
                  },
                  {
                    valueString: '4 years'
                  },
                  {
                    valueString: '5 years'
                  }
                ]
              },
              {
                linkId: '3ba3a34f-cb05-4d85-b5ea-0eddeb565aeb',
                text: 'Red flags',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '9c717263-341e-416f-aad8-7aec7d2167c9',
                    text: 'Social Emotional',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '6 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Does not smile or interact with people'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'c10acb25-fdc3-401e-b0aa-d85b2921e5bb',
                    text: 'Social Emotional',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '9 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString:
                            'Not sharing enjoyment with others using eye contact or facial expression'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'b6bb38f6-8084-4c89-a0f2-9d77aacab61d',
                    text: 'Social Emotional',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '12 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Does not notice someone new'
                      },
                      {
                        valueString:
                            'Does not pay early turn taking games (eg peekaboo, rolling a ball)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'c0ad8dc5-4672-4b21-b30d-6dcc7a00109a',
                    text: 'Social Emotional',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '18 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Lacks interest in playing and interacting with others'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'fc0977e1-fd83-4d0b-a57a-e94c7fd41fdb',
                    text: 'Social Emotional',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '2 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString:
                            'When playing with toys tends to bang, drop, or throw them rather than use them for their purpose (eg Cuddle doll, build blocks)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '70f7b96f-eaae-490b-8522-1214c1b1aede',
                    text: 'Social Emotional',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '3 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'No interest in pretend play or interacting with other children'
                      },
                      {
                        valueString:
                            'Difficulty noticing and understanding feelings in themselves and others (eg happy, sad)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '03ff1391-f48d-4b99-894c-159f4d09eb33',
                    text: 'Social Emotional',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '4 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Unwilling or unable to play cooperatively'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'ee5f0a61-a8a1-473e-addf-ca5b1eaad7d3',
                    text: 'Social Emotional',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '5 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Play is different than their friends'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '2b23128e-1622-4880-abd6-c9cd429b48e3',
                    text: 'Communication',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '6 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not starting to babble (eg aahh, oohh)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'dfb86be5-b6ff-400e-b7d6-68701df086da',
                    text: 'Communication',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '9 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not using gestures (eg pointing, showing, waving)'
                      },
                      {
                        valueString: 'Not using two part babble (eg bubu, dada)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '4d802a6d-c89e-4460-8091-874f855be4ad',
                    text: 'Communication',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '12 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'No babbled phrases that sound like talking'
                      },
                      {
                        valueString: 'No response to familiar words (eg bottle, daddy)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'b8e1a699-ed65-491f-9865-8ab855bb2d33',
                    text: 'Communication',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '18 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'No clear words'
                      },
                      {
                        valueString: "Cannot understand short requests (eg 'Where is the ball?')"
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '6c3637ed-4afd-45be-a15c-9d5e7d8e78e8',
                    text: 'Communication',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '2 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not learning new words'
                      },
                      {
                        valueString: "Not putting words together (eg 'push car')"
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '25d67a2f-8bbe-4f79-9488-1682d2ce49fa',
                    text: 'Communication',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '3 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Speech is difficult for familiar people to understand'
                      },
                      {
                        valueString: 'Not using simple sentences (eg big car go)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'f00b5ae1-cc33-44f9-bd9b-f9b6c93cc005',
                    text: 'Communication',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '4 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Speech difficult to understand'
                      },
                      {
                        valueString:
                            "Not able to follow directions with two steps (eg 'Put your bag away and then go play')"
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '3e06438a-ee7d-4880-83aa-68d2ade997ce',
                    text: 'Communication',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '5 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Difficulty telling a parent what is wrong'
                      },
                      {
                        valueString:
                            "Not able to answer questions in a simple conversation (eg What's your name? Who is your family?)"
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '49d172b4-bc2f-46cd-95a8-2f3ecba8e852',
                    text: 'Cognition, fine motor and self care',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '6 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not reaching for and holding (grasping) toys'
                      },
                      {
                        valueString: 'Hands frequently clenched'
                      },
                      {
                        valueString: 'Does not explore objects with hand and mouth'
                      },
                      {
                        valueString: 'Does not bring hands together at midline'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '785ec313-7b25-4d0d-9421-382981286cbc',
                    text: 'Cognition, fine motor and self care',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '9 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Does not hold objects'
                      },
                      {
                        valueString: "Does not 'give' objects on request"
                      },
                      {
                        valueString: 'Cannot move toy from one hand to another'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '2c2b263e-41a5-4dae-94e1-814f5bfca20a',
                    text: 'Cognition, fine motor and self care',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '12 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Does not feed self finger foods or hold own bottle/cup'
                      },
                      {
                        valueString: 'Unable to pick up small items using index finger and thumb'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'd6d7d675-0fee-466d-85e8-5dae46adac40',
                    text: 'Cognition, fine motor and self care',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '18 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Does not scribble with a crayon'
                      },
                      {
                        valueString: 'Does not attempt to stack blocks after demonstration'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'c48e4138-0952-49a7-9c77-14b3e6d1dad3',
                    text: 'Cognition, fine motor and self care',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '2 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString:
                            'Does not attempt to feed self using a spoon and/or help with dressing'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '433e768c-8458-476a-8330-3f59a4aa94b4',
                    text: 'Cognition, fine motor and self care',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '3 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString:
                            'Does not attempt everyday care skills (such as feeding or dressing)'
                      },
                      {
                        valueString: 'Difficulty in manipulating small objects (eg threading beads)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '06d96181-2b2d-48de-b80f-bd5ccb2fb3c1',
                    text: 'Cognition, fine motor and self care',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '4 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not toilet trained by day'
                      },
                      {
                        valueString: 'Not able to draw lines and circles'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'e08345d3-a919-4bf0-8775-5df84a173832',
                    text: 'Cognition, fine motor and self care',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '5 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Concerns from teacher about school readiness'
                      },
                      {
                        valueString:
                            'Not independently able to complete everyday routines such as feeding and dressing'
                      },
                      {
                        valueString: 'Cannot draw simple pictures (eg stick person)'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '7f3861fd-b9f0-489d-8a39-5fdd18eeaf0e',
                    text: 'Gross motor',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '6 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString:
                            'Not holding head and shoulders up with good control when lying on tummy'
                      },
                      {
                        valueString: 'Not holding head with good control in supported sitting'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '68809920-fbf4-48e5-89f7-c0b49a8b8f78',
                    text: 'Gross motor',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '9 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not rolling'
                      },
                      {
                        valueString: 'Not sitting independently/ without support'
                      },
                      {
                        valueString: 'Not moving (eg creeping, crawling)'
                      },
                      {
                        valueString: 'Not taking weight on legs when held in standing'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '5cf7c9bc-b3ec-43ac-8de8-65078f57a82b',
                    text: 'Gross motor',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '12 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString:
                            'No form of independent mobility (eg crawling, commando crawling, bottom shuffle)'
                      },
                      {
                        valueString: 'Not pulling to stand independently and holding on for support'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'a1137862-767c-49fb-883b-92bee7588edc',
                    text: 'Gross motor',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '18 months'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not standing independently'
                      },
                      {
                        valueString: 'Not attempting to walk without support'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'dd83d558-6a7f-4b94-b677-7c2b31ccc52f',
                    text: 'Gross motor',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '2 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not able to walk independently'
                      },
                      {
                        valueString: 'Not able to walk up and down stairs holding on'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '5ea4460c-a4c5-4025-bf85-64884a66458f',
                    text: 'Gross motor',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '3 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not able to walk up and down stairs independently'
                      },
                      {
                        valueString: 'Not able to run or jump'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '75b597b4-3b38-4efd-aeb2-ab1551d83c3c',
                    text: 'Gross motor',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '4 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not able to walk, run, climb, jump and uses stairs confidently'
                      },
                      {
                        valueString: 'Cannot catch, throw or kick a ball'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'f23ac52c-2064-4032-b283-6ce09fc306fa',
                    text: 'Gross motor',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: '0b520b20-98df-4024-b25d-2986f6b96e77',
                        operator: '=',
                        answerString: '5 years'
                      }
                    ],
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Not able to walk, run, climb, jump and use stairs confidently'
                      },
                      {
                        valueString:
                            'Not able to hop five times on one leg and stand on one leg for five seconds'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '758d4109-363a-48c9-95f3-8a8d8b1b32ec',
                    text: 'Red flags at any age',
                    type: 'choice',
                    repeats: true,
                    answerOption: [
                      {
                        valueString: 'Strong parental concerns'
                      },
                      {
                        valueString: 'Significant loss of skills'
                      },
                      {
                        valueString: 'Lack of response to sound or visual stimuli'
                      },
                      {
                        valueString: 'Poor interaction with adults or other children'
                      },
                      {
                        valueString: 'Lack of, or limited eye contact'
                      },
                      {
                        valueString:
                            'Differences between right and left sides of body in strength, movement or tone'
                      },
                      {
                        valueString:
                            'Marked low tone (floppy) or high tone (stiff and tense) and significantly impacting on development and functional motor skills'
                      }
                    ]
                  }
                ]
              },
              {
                linkId: 'MarkComplete-22',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age >= 12'
                }
              }
            ],
            linkId: '14a9fb5f-5b0e-4862-b143-08a11cd3ebf0',
            text: 'Substance use, including tobacco',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-29',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-29',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-29',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-29',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '515eda6e-973a-4b10-910a-0d4bf4f2efff',
                text: 'Smoking',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              '%ObsTobaccoSmokingStatus.entry.resource.valueCodeableConcept.coding'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'b639a3a8-f476-4cc8-b5c7-f5d2abb23511',
                    text: 'Smoking status',
                    type: 'choice',
                    repeats: false,
                    answerOption: [
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '266919005',
                          display: 'Never smoked'
                        }
                      },
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '77176002',
                          display: 'Smoker'
                        }
                      },
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '8517006',
                          display: 'Ex-Smoker'
                        }
                      },
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '16090371000119103',
                          display: 'Environmental exposure to tobacco smoke (home, car, etc)'
                        }
                      },
                      {
                        valueString: 'Wants to quit'
                      },
                      {
                        valueString: 'Other tobacco use'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '96dc7c22-d003-459c-8a56-f6cd182fc077',
                    text: 'Quit status',
                    type: 'choice',
                    enableWhen: [
                      {
                        question: 'b639a3a8-f476-4cc8-b5c7-f5d2abb23511',
                        operator: '=',
                        answerCoding: {
                          system: 'http://snomed.info/sct',
                          code: '8517006'
                        }
                      }
                    ],
                    repeats: false,
                    answerOption: [
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '48031000119106',
                          display: 'Quit >=12 months'
                        }
                      },
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '735128000',
                          display: 'Quit <12 months'
                        }
                      }
                    ]
                  },
                  {
                    linkId: '9e86387d-1be4-4c26-9047-9dd6b03e1ee0',
                    text: 'How many?',
                    type: 'string',
                    enableWhen: [
                      {
                        question: 'b639a3a8-f476-4cc8-b5c7-f5d2abb23511',
                        operator: '=',
                        answerCoding: {
                          system: 'http://snomed.info/sct',
                          code: '77176002'
                        }
                      },
                      {
                        question: 'b639a3a8-f476-4cc8-b5c7-f5d2abb23511',
                        operator: '=',
                        answerCoding: {
                          system: 'http://snomed.info/sct',
                          code: '8517006'
                        }
                      },
                      {
                        question: 'b639a3a8-f476-4cc8-b5c7-f5d2abb23511',
                        operator: '=',
                        answerString: 'Wants to quit'
                      }
                    ],
                    enableBehavior: 'any',
                    repeats: false
                  },
                  {
                    linkId: '32e71641-f660-4ca2-af99-dff8917f07be',
                    text: 'How long as a smoker?',
                    type: 'string',
                    enableWhen: [
                      {
                        question: 'b639a3a8-f476-4cc8-b5c7-f5d2abb23511',
                        operator: '=',
                        answerCoding: {
                          system: 'http://snomed.info/sct',
                          code: '77176002'
                        }
                      },
                      {
                        question: 'b639a3a8-f476-4cc8-b5c7-f5d2abb23511',
                        operator: '=',
                        answerCoding: {
                          system: 'http://snomed.info/sct',
                          code: '8517006'
                        }
                      },
                      {
                        question: 'b639a3a8-f476-4cc8-b5c7-f5d2abb23511',
                        operator: '=',
                        answerString: 'Wants to quit'
                      }
                    ],
                    enableBehavior: 'any'
                  }
                ]
              },
              {
                linkId: '34feaee8-8088-43ee-991d-9729990b5550',
                text: 'Alcohol and other substance use',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                        valueString:
                            '<div xmlns="http://www.w3.org/1999/xhtml">\r\n        <div>Quantity and frequency of:</div>\r\n        <ul>\r\n          <li>alcohol</li>\r\n          <li>caffeine (coffee, soft drinks, iced coffee)</li>\r\n          <li>cannabis/yarndi/gunja</li>\r\n          <li>other substance use: IVDU, methamphetamine, opiates, solvents, other</li>\r\n        </ul>\r\n\t      </div>'
                      },
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                        valueString: 'Quantity and frequency of substance use'
                      }
                    ],
                    linkId: 'ea73d52c-f831-46be-a45d-2c42250a5210',
                    text: 'Quantity and frequency of: alcohol; caffeine (coffee, soft drinks, iced coffee); cannabis/yarndi/gunja; other substance use: IVDU, methamphetamine, opiates, solvents, other',
                    type: 'text',
                    repeats: false,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'prompt'
                                }
                              ]
                            }
                          }
                        ],
                        linkId: '232cf24c-db60-4601-869d-525fb6e05988',
                        text: 'details',
                        type: 'display'
                      }
                    ]
                  }
                ]
              },
              {
                linkId: 'f8e1cc1f-f1a1-4eb3-8255-77d600f52831',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-29',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age > 12'
                }
              }
            ],
            linkId: 'a7bb0dd2-4b2d-49c2-9da6-3cb0a4dd9240',
            text: 'Gambling',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-10',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-10',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-10',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-10',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: 'fb489c43-f311-41f5-9d6a-1b61748e165f',
                text: 'Gambling issues',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'a233c01e-a72e-474b-9a26-bab1504491fa',
                    text: 'Have you or someone close to you ever had issues with gambling?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'd1b68cfc-77cf-464e-83ce-0e8517bed9f3',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'a233c01e-a72e-474b-9a26-bab1504491fa',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '2ab74c97-55d9-4fd9-968f-8962d62ea573',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-10',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '(%age > 12).intersect(%age <= 24)'
                }
              },
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                valueString: 'Sexual health'
              }
            ],
            linkId: '4b49c291-6e93-4b7e-be3b-15ef8bc207ad',
            text: 'Sexual health (sexual activity, contraception, safe sex/protection, sexual orientation, gender identity, pressure to have sex, STIs)',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-36',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-36',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-36',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-36',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: 'e5aeda89-b820-4bb3-8fbd-d4f662207b7d',
                text: 'Puberty and sexual health concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '1d20138a-caf3-4c43-9693-04c08d37a84a',
                    text: 'Is there anything that you are worried about in relation to puberty/your sexual health?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'd7b92cad-4aa8-47d3-975c-92563f132325',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '1d20138a-caf3-4c43-9693-04c08d37a84a',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                    valueString:
                        '<div xmlns="http://www.w3.org/1999/xhtml">\r\n      <div>Consider discussing as relevant to age/sex/gender:</div>\r\n      <ul>\r\n        <li>menstruation (including risk of anaemia)</li>\r\n        <li>current sexual activity</li>\r\n        <li>contraception</li>\r\n        <li>safe sex practice (eg use of condoms)</li>\r\n        <li>sexually transmitted infection symptoms and screening</li>\r\n        <li>blood-borne virus screening</li>\r\n      </ul>\r\n      </div>'
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Consider discussing items relevant to age/sex/gender'
                  }
                ],
                linkId: '0fba3972-faa3-4f40-940c-c2f1c9b55329',
                text: 'Consider discussing as relevant to age/sex/gender: menstruation (including risk of anaemia); current sexual activity; contraception; safe sex practice (eg use of condoms); sexually transmitted infection symptoms and screening; blood-borne virus screening',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'b41572ba-cf36-4cec-addf-cb0b47fea63f',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-36',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '(%age > 24).intersect(%age <= 49)'
                }
              }
            ],
            linkId: '589b53a4-ceb2-41c0-850a-69438f9fd1cc',
            text: 'Genitourinary and sexual health',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-35',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-35',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-35',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-35',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '5f5d4886-ce06-47fa-a4d8-f6808b9081c0',
                text: 'Sexual health concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'e56e79e5-8fbb-43f0-b2a3-018b55750bd0',
                    text: 'Is there anything that you are worried about in relation to your sexual health?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '5148c6c6-c99f-480d-bb05-569064ba7118',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'e56e79e5-8fbb-43f0-b2a3-018b55750bd0',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: 'd844a31e-8e51-420b-855c-4f485a180a57',
                text: 'Cervical screening',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'check-box'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '37dbd343-6d02-477c-89bf-59ba022efbb7',
                    text: 'Cervical screening status',
                    type: 'choice',
                    repeats: false,
                    answerOption: [
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '736595007',
                          display: 'Declined'
                        }
                      },
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '410527000',
                          display: 'Offered'
                        }
                      },
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '171154002',
                          display: 'Not required'
                        }
                      },
                      {
                        valueCoding: {
                          system: 'http://snomed.info/sct',
                          code: '171155001',
                          display: 'Up to date'
                        }
                      }
                    ]
                  },
                  {
                    linkId: 'f93eb998-1502-4d8a-88a4-986117a387c5',
                    text: 'Next due',
                    type: 'date',
                    repeats: false
                  },
                  {
                    linkId: '862fc298-5b5e-4a46-badc-900c6ba1ff50',
                    text: 'Details',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                    valueString:
                        '<div xmlns="http://www.w3.org/1999/xhtml">\r\n      <div>Consider discussing as relevant to age/sex/gender:</div>\r\n      <ul>\r\n        <li>contraception</li>\r\n        <li>menstruation</li>\r\n        <li>sexually transmitted infection symptoms and screening</li>\r\n        <li>blood-borne virus screening</li>\r\n        <li>continence</li>\r\n        <li>menopause</li>\r\n        <li>erectile dysfunction</li>\r\n      </ul>\r\n      </div>'
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Consider discussing items relevant to age/sex/gender'
                  }
                ],
                linkId: '39b02169-ea34-4af9-aa35-1c47f7f39333',
                text: 'Consider discussing as relevant to age/sex/gender: contraception; menstruation; sexually transmitted infection symptoms and screening; blood-borne virus screening; continence; menopause; erectile dysfunction',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'efd0735c-c379-471f-83bb-93b0392093aa',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-35',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age >= 50'
                }
              }
            ],
            linkId: '02048954-e9d7-424e-8c7b-6a3c495d7ce4',
            text: 'Genitourinary and sexual health',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-25',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-25',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-25',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-25',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '8172aaac-81c4-4b06-b4cd-6a891a227e9f',
                text: 'Sexual health concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '1c40a720-bdb7-4386-a9f6-be82b7349bf7',
                    text: 'Consider asking when appropriate: Is there anything that you are worried about in relation to your sexual health?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'f93fe768-9215-4a15-9376-686e9530ea79',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '1c40a720-bdb7-4386-a9f6-be82b7349bf7',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '2e1ea1cc-1f74-4b2e-bfda-f6a1d41e1e50',
                text: 'Continence issues',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '64fd0f79-7e09-4934-905d-9bff6715f9ba',
                    text: 'Do you have problems with urine leaking?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '4fc14fd9-4c7e-48ec-90c0-c406523400fa',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '64fd0f79-7e09-4934-905d-9bff6715f9ba',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                    valueString:
                        '<div xmlns="http://www.w3.org/1999/xhtml">\r\n      <div>Consider discussing as relevant to age/sex/gender:</div>\r\n      <ul>\r\n        <li>menopause</li>\r\n        <li>erectile dysfunction</li>\r\n        <li>prostatic symptoms</li>\r\n      </ul>\r\n\t    </div>'
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Consider discussing items relevant to age/sex/gender'
                  }
                ],
                linkId: '8d75d1f1-290b-41fc-8e32-ad0681c650bb',
                text: 'Consider discussing as relevant to age/sex/gender: menopause; erectile dysfunction; prostatic symptoms',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'e9936322-e6fe-4cf7-ab61-22846a8fbb95',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-25',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: '961da481-1698-4a1d-962b-a9c2185e335a',
            text: 'Eye health',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-8',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-8',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-8',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-8',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '0e30de87-8d5a-4b7a-893a-f1791c4f31c5',
                text: 'Vision concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age <= 12'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'bc49ee24-62a8-4252-a5ee-9c68bfed601c',
                    text: "Is there anything that you are worried about with your child's vision?",
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age > 12'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '6286346d-c805-4519-8e82-bf364a215c58',
                    text: 'Is there anything that you are worried about with your vision?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '468770e4-af95-4377-8af5-280deb585e01',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'bc49ee24-62a8-4252-a5ee-9c68bfed601c',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      },
                      {
                        question: '6286346d-c805-4519-8e82-bf364a215c58',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    enableBehavior: 'any',
                    repeats: false
                  }
                ]
              },
              {
                linkId: '0a68e069-0a54-4f02-b17e-dec22f008082',
                text: 'Eye examination',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age < 1'
                        }
                      }
                    ],
                    linkId: '58e29c14-e279-4a1d-a7d6-b9d92b60d0e2',
                    text: 'Red reflex (up to six months)',
                    type: 'group',
                    repeats: false,
                    item: [
                      {
                        linkId: '021437bf-b9ca-43e9-804c-affe84f84497',
                        text: 'Right eye',
                        type: 'string',
                        repeats: false
                      },
                      {
                        linkId: 'a295c5bd-972a-41d4-9844-a5d30478cd99',
                        text: 'Left eye',
                        type: 'string',
                        repeats: false
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age <= 12'
                        }
                      }
                    ],
                    linkId: '70773cba-54b0-43bc-b1f2-2942693957ce',
                    text: 'Evidence of squint or other abnormality',
                    type: 'group',
                    repeats: false,
                    item: [
                      {
                        linkId: '6c552a96-4929-458a-97b5-418a7069d9c2',
                        text: 'Right eye',
                        type: 'string',
                        repeats: false
                      },
                      {
                        linkId: '24ffc08e-dbde-43d9-ac48-7f7dba7cf396',
                        text: 'Left eye',
                        type: 'string',
                        repeats: false
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age >= 3'
                        }
                      }
                    ],
                    linkId: '3424f8ef-d17c-4ad6-ba09-60a0d0b7a1d2',
                    text: 'Visual acuity',
                    type: 'group',
                    repeats: false,
                    item: [
                      {
                        linkId: 'ed7900c2-8912-42e1-80f1-9ed09f8e00f8',
                        text: 'Right eye',
                        type: 'string',
                        repeats: false
                      },
                      {
                        linkId: '887b031c-d47e-42a1-aee5-4befda25ba22',
                        text: 'Left eye',
                        type: 'string',
                        repeats: false
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age >= 25'
                        }
                      }
                    ],
                    linkId: 'f6603a1c-7176-4121-8df5-03433cdc36db',
                    text: 'Trachoma Check (endemic areas)',
                    type: 'group',
                    repeats: false,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'check-box'
                                }
                              ]
                            }
                          }
                        ],
                        linkId: 'c76f02fb-2021-4462-b6ca-1da14b772c11',
                        text: 'Right eye',
                        type: 'choice',
                        repeats: false,
                        answerOption: [
                          {
                            valueCoding: {
                              system: 'http://snomed.info/sct',
                              code: '60332004',
                              display: 'Trichiasis'
                            }
                          },
                          {
                            valueCoding: {
                              system: 'http://snomed.info/sct',
                              code: '95726001',
                              display: 'Corneal scarring'
                            }
                          }
                        ]
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'check-box'
                                }
                              ]
                            }
                          }
                        ],
                        linkId: 'ae82cf54-17a3-421f-b6f6-5ee87631e281',
                        text: 'Left eye',
                        type: 'choice',
                        repeats: false,
                        answerOption: [
                          {
                            valueCoding: {
                              system: 'http://snomed.info/sct',
                              code: '60332004',
                              display: 'Trichiasis'
                            }
                          },
                          {
                            valueCoding: {
                              system: 'http://snomed.info/sct',
                              code: '95726001',
                              display: 'Corneal scarring'
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                linkId: '8dcdc04c-7655-4b47-88eb-8425f0cdc0d0',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-8',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: 'de71bbd0-178c-4974-9c75-55d5a48c66f7',
            text: 'Ear health and hearing',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-6',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-6',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-6',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-6',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: 'f3473e82-4336-4858-96de-3a61eff5abfb',
                text: 'Child listening concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'f982c374-f023-4e68-8968-1f1f5d3969ae',
                    text: "Is there anything that you are worried about with your child's listening?",
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '297114f4-8c3f-4916-b840-c38ea14d37b1',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'f982c374-f023-4e68-8968-1f1f5d3969ae',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: 'd2a3a346-7b20-4634-beb4-f2bdc7252fe5',
                text: 'Child language concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '06c150f8-4d54-4d10-aeff-2ef7567b6812',
                    text: "Is there anything you are worried about with your child's language/talking?",
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '30dc1581-f6b7-49f0-be09-3902178a495f',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '06c150f8-4d54-4d10-aeff-2ef7567b6812',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '6662bc91-fd05-4ea0-a96b-1cc124a9769a',
                text: 'Child snoring',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'b326271b-e9b1-45a0-b899-125364833702',
                    text: 'Do you notice snoring/noisy breathing at night/while your child is sleeping?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: '36a3967c-e79a-49a7-8022-ac9561c4e656',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'b326271b-e9b1-45a0-b899-125364833702',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: 'ec7b6e93-e1f0-41f5-b2c2-43c7ddff8aed',
                text: 'Hearing concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '3e53edc7-c90e-4681-a006-b7a05b91a02c',
                    text: 'Is there anything that you are worried about with your hearing?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'd72dacb8-a9b3-483b-ae24-8b062873b2cb',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '3e53edc7-c90e-4681-a006-b7a05b91a02c',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: '11aa62ca-5a52-428b-952b-cfbcd2c75824',
                text: 'Last hearing test (audiology)',
                type: 'date',
                repeats: false
              },
              {
                linkId: '31452c47-30b2-4590-95f4-b2b75aad2fb6',
                text: 'Ear examination',
                type: 'group',
                repeats: false,
                item: [
                  {
                    linkId: '44c3434d-ea52-43bd-b635-34184e5f037d',
                    text: 'Otoscopy',
                    type: 'group',
                    repeats: false,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-display-category',
                                  code: 'instructions'
                                }
                              ]
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '%age <= 12'
                            }
                          }
                        ],
                        linkId: 'fe96046a-a202-4c22-ad3e-00419e717185',
                        text: 'Video otoscopy procedure recommended where possible as it allows for parental education and for images to be saved for tracking over time',
                        type: 'display'
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '%age <= 12'
                            }
                          }
                        ],
                        linkId: '2841915f-c8d2-4edb-8bc7-39b63385a2fb',
                        text: 'Otoscopy findings',
                        type: 'group',
                        repeats: false,
                        item: [
                          {
                            extension: [
                              {
                                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                                valueCodeableConcept: {
                                  coding: [
                                    {
                                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                                      code: 'check-box'
                                    }
                                  ]
                                }
                              },
                              {
                                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                                valueString: 'Other, please specify'
                              }
                            ],
                            linkId: 'dedfc83e-7451-404d-bd24-97b1254304eb',
                            text: 'Left ear',
                            type: 'open-choice',
                            repeats: true,
                            answerOption: [
                              {
                                valueString: 'Clear and intact'
                              },
                              {
                                valueString: 'Dull and intact'
                              },
                              {
                                valueString: 'Discharge'
                              },
                              {
                                valueString: 'Retracted'
                              },
                              {
                                valueString: 'Unable to view eardrum'
                              },
                              {
                                valueString: 'Wax'
                              },
                              {
                                valueString: 'Grommet in canal'
                              },
                              {
                                valueString: 'Grommet in eardrum'
                              },
                              {
                                valueString: 'Perforation'
                              },
                              {
                                valueString: 'Red/bulging'
                              }
                            ]
                          },
                          {
                            extension: [
                              {
                                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                                valueCodeableConcept: {
                                  coding: [
                                    {
                                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                                      code: 'check-box'
                                    }
                                  ]
                                }
                              },
                              {
                                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                                valueString: 'Other, please specify'
                              }
                            ],
                            linkId: '23daa784-4476-447f-8aa2-42933b4490d9',
                            text: 'Right ear',
                            type: 'open-choice',
                            repeats: true,
                            answerOption: [
                              {
                                valueString: 'Clear and intact'
                              },
                              {
                                valueString: 'Dull and intact'
                              },
                              {
                                valueString: 'Discharge'
                              },
                              {
                                valueString: 'Retracted'
                              },
                              {
                                valueString: 'Unable to view eardrum'
                              },
                              {
                                valueString: 'Wax'
                              },
                              {
                                valueString: 'Grommet in canal'
                              },
                              {
                                valueString: 'Grommet in eardrum'
                              },
                              {
                                valueString: 'Perforation'
                              },
                              {
                                valueString: 'Red/bulging'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '%age > 12'
                            }
                          }
                        ],
                        linkId: '361b3c80-375b-423e-bb61-5732826bc2f0',
                        text: 'Otoscopy findings',
                        type: 'group',
                        repeats: false,
                        item: [
                          {
                            extension: [
                              {
                                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                                valueCodeableConcept: {
                                  coding: [
                                    {
                                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                                      code: 'check-box'
                                    }
                                  ]
                                }
                              },
                              {
                                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                                valueString: 'Other, please specify'
                              }
                            ],
                            linkId: '079df9c5-234c-4129-8769-800dab47a59a',
                            text: 'Left ear',
                            type: 'open-choice',
                            repeats: true,
                            answerOption: [
                              {
                                valueString: 'Clear and intact'
                              },
                              {
                                valueString: 'Dull and intact'
                              },
                              {
                                valueString: 'Discharge'
                              },
                              {
                                valueString: 'Retracted'
                              },
                              {
                                valueString: 'Unable to view eardrum'
                              },
                              {
                                valueString: 'Wax'
                              }
                            ]
                          },
                          {
                            extension: [
                              {
                                url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                                valueCodeableConcept: {
                                  coding: [
                                    {
                                      system: 'http://hl7.org/fhir/questionnaire-item-control',
                                      code: 'check-box'
                                    }
                                  ]
                                }
                              },
                              {
                                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                                valueString: 'Other, please specify'
                              }
                            ],
                            linkId: 'ce1fc869-a412-4aea-aa53-36e794a14519',
                            text: 'Right ear',
                            type: 'open-choice',
                            repeats: true,
                            answerOption: [
                              {
                                valueString: 'Clear and intact'
                              },
                              {
                                valueString: 'Dull and intact'
                              },
                              {
                                valueString: 'Discharge'
                              },
                              {
                                valueString: 'Retracted'
                              },
                              {
                                valueString: 'Unable to view eardrum'
                              },
                              {
                                valueString: 'Wax'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '(%age > 5).intersect(%age <= 12)'
                        }
                      }
                    ],
                    linkId: '972afa06-9649-43d9-b8ce-c802f7f27e39',
                    text: 'Tympanometry',
                    type: 'group',
                    repeats: false,
                    item: [
                      {
                        linkId: 'a0d1413f-31e5-4b29-a00b-235f50f91cf7',
                        text: 'Left ear',
                        type: 'text',
                        repeats: false
                      },
                      {
                        linkId: '6423348a-943f-41e5-b4f2-ef5a34e56414',
                        text: 'Right ear',
                        type: 'text',
                        repeats: false
                      }
                    ]
                  }
                ]
              },
              {
                linkId: 'ac87b23a-b022-4d62-9e82-1c56583bca34',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-6',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: 'bde9ab00-a20f-4a7c-9266-11f53f60c65f',
            text: 'Oral and dental health',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-20',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-20',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-20',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-20',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '70714d58-d936-4170-9763-82398f84a7a7',
                text: 'Dental concerns',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age <= 12'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'e4cf4f15-7eed-4aa1-9f9d-61ccd659685c',
                    text: "Is there anything that you are worried about with your child's teeth or mouth?",
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age > 12'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: 'cb287506-9a64-4ee8-8f24-ba7cb77756f3',
                    text: 'Is there anything that you are worried about with your teeth?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'cf949305-5ff7-4767-b946-7a50efd21cfc',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: 'e4cf4f15-7eed-4aa1-9f9d-61ccd659685c',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      },
                      {
                        question: 'cb287506-9a64-4ee8-8f24-ba7cb77756f3',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    enableBehavior: 'any',
                    repeats: false
                  }
                ]
              },
              {
                linkId: '1f362cb2-911f-448b-b717-2614f1aced86',
                text: 'Last dental checkup',
                type: 'date',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  }
                ],
                linkId: 'ffe81bde-608f-4e3f-98ae-39d0b9884dcc',
                text: 'Dentures?',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNo'
              },
              {
                linkId: '5a3a56c6-b953-4d96-894d-95e07268473f',
                text: 'Teeth and mouth check',
                type: 'group',
                repeats: false,
                item: [
                  {
                    linkId: '6247ab4c-41cb-4e77-b028-c9c2a8c7da91',
                    text: 'Examination findings',
                    type: 'text',
                    repeats: false
                  },
                  {
                    linkId: '79e09f4d-dac6-4088-baa0-d95dc658fb0b',
                    text: 'Document conversation about oral health and care of teeth',
                    type: 'text',
                    repeats: false,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'prompt'
                                }
                              ]
                            }
                          }
                        ],
                        linkId: '39ddbf92-847d-4c98-adff-6aa3013f8b39',
                        text: 'Details',
                        type: 'display'
                      }
                    ]
                  }
                ]
              },
              {
                linkId: '875574fa-9769-42ca-8381-9e80c3e5233d',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-20',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age <= 24'
                }
              }
            ],
            linkId: '7d4772cb-a1cd-49d9-853f-883ccd8343a6',
            text: 'Skin',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-26',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-26',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-26',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-26',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                linkId: '0d23be6b-3a30-4a80-9ebe-158acf32eb09',
                text: 'Skin problems',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age <= 12'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '829de3f8-eea9-4139-8a18-47c16182ac9e',
                    text: 'Does your child have any skin problems?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%age > 12'
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '353f528b-3518-4fb3-a0bd-3ed5ae6b036a',
                    text: 'Is there anything that you are worried about with your skin?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'b9332f4f-ed6c-4e87-a467-13d7e83bd550',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '829de3f8-eea9-4139-8a18-47c16182ac9e',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      },
                      {
                        question: '353f528b-3518-4fb3-a0bd-3ed5ae6b036a',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    enableBehavior: 'any',
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  }
                ],
                linkId: '80e4349f-6d89-4017-8632-9a947e50e947',
                text: 'Do you use sun protection?',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNo'
              },
              {
                linkId: '206f4e35-3b87-4252-97fc-c78bf9fb6f5d',
                text: 'Document conversation about sun protection as appropriate (ie sunscreen, hats, shade).',
                type: 'text',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '03f9df0e-dd04-43b2-b556-ff65a70c5a0d',
                    text: 'Details',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: '7cec4c99-90da-40bc-86a6-f77abb093933',
                text: 'General skin examination findings',
                type: 'text',
                repeats: false
              },
              {
                linkId: '88d23fa4-df88-43ab-a1d0-69315d55c3bf',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-26',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: '205677d6-17c7-4285-a7c4-61aa02b6c816',
            text: 'Immunisation',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-13',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-13',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-13',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-13',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '54de7714-b917-4426-acb4-29d48648a2d8',
                text: 'Check Child Health Record/Book and Australian Immunisation Register',
                type: 'display'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: 'd77c527d-6fde-4ed7-97b9-c71acf817f39',
                text: 'Eligibility for funded vaccines may vary across jurisdictions',
                type: 'display'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age > 12).intersect(%age <= 24)'
                    }
                  }
                ],
                linkId: '77d87581-d4d7-4267-9f3c-ad6541ad0f46',
                text: 'Check Australian Immunisation Register',
                type: 'display'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age > 24).intersect(%age <= 49)'
                    }
                  }
                ],
                linkId: 'a2631d2c-2b5c-4147-9aca-05ae655a56a5',
                text: 'Check recommended primary vaccinations completed and provide catch-up if required',
                type: 'display'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                    valueCode: 'horizontal'
                  }
                ],
                linkId: '69a4a459-196b-4931-8336-ea76ab3fccd1',
                text: 'Immunisations up to date and recorded on Australian Immunisation Register (as per Australian immunisation handbook)?',
                type: 'choice',
                repeats: false,
                answerValueSet: '#YesNo'
              },
              {
                linkId: '08e8ca54-9af8-4028-be83-aab20bccecc3',
                text: 'Immunisations due',
                type: 'string',
                repeats: true
              },
              {
                linkId: 'cc522cb1-b553-48c7-9028-61d15dd60845',
                text: 'Vaccines given today',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'radio-button'
                            }
                          ]
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation',
                        valueCode: 'horizontal'
                      }
                    ],
                    linkId: '9f5787e6-8ece-46a4-8d67-e7c3e14daf18',
                    text: 'Vaccines recorded on Australian Immunisation Register?',
                    type: 'choice',
                    repeats: false,
                    answerValueSet: '#YesNo'
                  },
                  {
                    linkId: 'c8da01ec-de58-46e3-81a1-2c49aed8c28e',
                    text: 'Details',
                    type: 'text',
                    enableWhen: [
                      {
                        question: '9f5787e6-8ece-46a4-8d67-e7c3e14daf18',
                        operator: '=',
                        answerCoding: {
                          system: 'http://terminology.hl7.org/CodeSystem/v2-0136',
                          code: 'Y'
                        }
                      }
                    ],
                    repeats: false
                  }
                ]
              },
              {
                linkId: 'bcd1c9f2-889e-41e5-8c2b-a70221c5cec5',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-13',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: 'c587e3b6-b91a-40dc-9a16-179342d001e9',
            text: 'Examination',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-7',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-7',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-7',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-7',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: 'd15824f8-eafc-4fa0-80a2-82f0ec7f8728',
                text: 'Growth measures recorded on Centers for Disease Control and Prevention (CDC) and World Health Organization (WHO) growth charts for centile and tracking overtime',
                type: 'display'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsBodyHeight.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'cm'
                    }
                  }
                ],
                linkId: '7df41f88-6511-4793-a26a-d96fcd89fbba',
                text: 'Length/Height',
                type: 'decimal',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'a7399bd6-33ef-4fb4-988c-d1426e93ffc0',
                    text: 'cm',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsBodyHeight.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'cm'
                    }
                  }
                ],
                linkId: '2d68889b-88c1-4c6d-8b00-db4178dc1f52',
                text: 'Height',
                type: 'decimal',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'b290acfa-d1f7-4e4f-91bd-93b402721127',
                    text: 'cm',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsBodyWeight.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'kg'
                    }
                  }
                ],
                linkId: '2136abeb-d75d-475d-9cc7-eeda8d131b95',
                text: 'Weight',
                type: 'decimal',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'a67faacb-609a-440e-84e0-bc045a69c580',
                    text: 'kg',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsBMI.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'kg/m2'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'BMI calculation',
                      language: 'text/fhirpath',
                      expression: '(%weight/((%height/100).power(2))).round(1)'
                    }
                  }
                ],
                linkId: '820f5b73-3539-44d2-8e8f-c485cf443839',
                text: 'BMI',
                type: 'decimal',
                repeats: false,
                readOnly: true,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'ab15aa50-a1c6-469a-83c5-3a28f110c00b',
                    text: 'kg/m2',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsHeadCircumference.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'cm'
                    }
                  }
                ],
                linkId: 'e9bc555b-39f7-4ab7-9998-c2e691c3dd85',
                text: 'Head circumference',
                type: 'decimal',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'b39b7f1e-74e3-4600-b3f1-e18c2aa711ab',
                    text: 'cm',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 18'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsWaistCircumference.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'cm'
                    }
                  }
                ],
                linkId: 'f8cb01db-7ac7-4794-a276-773e3f1520c2',
                text: 'Waist circumference',
                type: 'decimal',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'a9fad80e-aee6-41bd-b82d-f31ede4dbc45',
                    text: 'cm',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: '72c56a10-a1d9-4a53-99ec-902fea9b58a7',
                text: 'Blood pressure',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%ObsBloodPressure.entry.resource.component.where(code.coding.where(code='8480-6')).value.value"
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                        valueCoding: {
                          system: 'http://unitsofmeasure.org',
                          code: 'mm[Hg]'
                        }
                      }
                    ],
                    linkId: '38cda3d6-6fbf-4970-91fc-f6c1636db5f9',
                    text: 'Systolic',
                    type: 'integer',
                    repeats: false,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'unit'
                                }
                              ]
                            }
                          }
                        ],
                        linkId: '085e2215-1bfd-45bb-a21a-a4904d0a6aa9',
                        text: 'mm Hg',
                        type: 'display'
                      }
                    ]
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression:
                              "%ObsBloodPressure.entry.resource.component.where(code.coding.where(code='8462-4')).value.value"
                        }
                      },
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                        valueCoding: {
                          system: 'http://unitsofmeasure.org',
                          code: 'mm[Hg]'
                        }
                      }
                    ],
                    linkId: '4d67ff19-80bc-42d0-b0fd-6f1a78d2b956',
                    text: 'Diastolic',
                    type: 'integer',
                    repeats: false,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'unit'
                                }
                              ]
                            }
                          }
                        ],
                        linkId: 'eb022a99-7bd0-4635-aaad-04ac0d0334c8',
                        text: 'mm Hg',
                        type: 'display'
                      }
                    ]
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsHeartRate.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: '/min'
                    }
                  }
                ],
                linkId: '4eb7887a-fb87-4130-a246-20a5284f47fd',
                text: 'Heart rate',
                type: 'integer',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'f5690e0c-1a80-4fee-9aa6-5768270afe6d',
                    text: '/min',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'a36e379a-904e-4b91-84e1-0650fb047837',
                text: 'Heart rhythm',
                type: 'choice',
                repeats: false,
                answerOption: [
                  {
                    valueCoding: {
                      system: 'http://snomed.info/sct',
                      code: '271636001',
                      display: 'Pulse Regular'
                    }
                  },
                  {
                    valueCoding: {
                      system: 'http://snomed.info/sct',
                      code: '61086009',
                      display: 'Pulse Irregular'
                    }
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '213a3eac-e530-4e27-859c-407136c7a0a6',
                text: 'Cardiac auscultation',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '8886f3bb-52de-4294-a5cb-8f960e2a6bbe',
                text: 'Abdominal examination',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '5e10229c-390d-4968-90d3-f896840f3c50',
                text: 'Gait examination (musculoskeletal structure, balance, coordination)',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age < 1'
                    }
                  }
                ],
                linkId: '6c69ee91-f777-494c-bf09-d963773cd4ae',
                text: 'Newborn examination (if indicated, infant aged <=6 weeks)',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  }
                ],
                linkId: '7a431d03-1726-4905-aae7-49f62a10ce5e',
                text: 'Haemoglobin (children at risk of iron deficiency anaemia)',
                type: 'string',
                repeats: false
              },
              {
                linkId: 'fcbfa6e1-c101-4675-969d-aa11027859c2',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-7',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age >= 25'
                }
              }
            ],
            linkId: 'd95abe99-8ef2-4b97-bc88-a2901e2ebc9c',
            text: 'Absolute cardiovascular risk calculation',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-2',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-2',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-2',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-2',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%ObsBloodPressure.entry.resource.component.where(code.coding.where(code='8480-6')).value.value"
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'mm[Hg]'
                    }
                  }
                ],
                linkId: '4b98f514-2f6a-41f3-ad9d-185abc68ae34',
                text: 'Systolic Blood Pressure',
                type: 'integer',
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '1624394a-1777-4692-b304-03cd42de4c27',
                    text: '75 or more',
                    type: 'display'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '414f230f-7b33-4e55-b323-724206f6825e',
                    text: 'mm Hg',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsTotalCholesterol.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'mmol/L'
                    }
                  }
                ],
                linkId: 'f11feebc-fc4a-40d5-8481-b87d9f5a89aa',
                text: 'Total Cholesterol',
                type: 'decimal',
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '0f260464-fcfc-46d1-b04b-c8fb061b781e',
                    text: '2 or more',
                    type: 'display'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'd5a18260-0376-4c73-97a9-a23198bccce1',
                    text: 'mmol/L',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%ObsHDLCholesterol.entry.resource.value.value'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
                    valueCoding: {
                      system: 'http://unitsofmeasure.org',
                      code: 'mmol/L'
                    }
                  }
                ],
                linkId: 'c47a7fae-0c60-40f8-8426-1019b1f0dd8f',
                text: 'HDL Cholesterol',
                type: 'decimal',
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'prompt'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '9b05a756-40f6-4ae4-9ec9-179e55685531',
                    text: 'Between 0.2 - 5',
                    type: 'display'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-item-control',
                              code: 'unit'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '28576058-6a24-4516-900a-42c9452722d3',
                    text: 'mmol/L',
                    type: 'display'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression:
                          "%Condition.entry.resource.code.coding.where(system='http://snomed.info/sct' and code='44054006').exists()"
                    }
                  }
                ],
                linkId: 'e8fed84e-6c15-4f62-bc95-cd08033af3f7',
                text: 'Diabetes',
                type: 'boolean',
                repeats: false
              },
              {
                linkId: 'b980624c-e91a-44d4-80ba-a9f34c0e1188',
                text: 'ECG LVH',
                type: 'boolean',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'CVD Risk Score',
                      language: 'text/fhirpath',
                      expression: '%cvdScore.round(0)'
                    }
                  }
                ],
                linkId: 'ca830916-e2ee-4b24-a4c1-13eee23f8733',
                text: 'Cardiovascular disease risk calculated result',
                type: 'integer',
                repeats: false,
                readOnly: true,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-display-category',
                              code: 'instructions'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: '1d0b746d-70a3-4c09-a33b-f67fd6db63a0',
                    text: 'https://auscvdrisk.com.au/risk-calculator',
                    type: 'display'
                  }
                ]
              },
              {
                linkId: 'f8022f3f-21fe-42c0-8abd-95f24e2e37e5',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-2',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age >= 12'
                }
              }
            ],
            linkId: '918f7f32-cdaf-4742-b33a-8254eda2d8bd',
            text: 'Investigations',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-14',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-14',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-14',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-14',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 18'
                    }
                  }
                ],
                linkId: '740cbc59-08e3-41e8-bc00-de22c1ad45a0',
                text: 'Full blood count, HbA1c or blood glucose level, serum lipids, Kidney function including eGFR, Liver function tests, ACR',
                type: 'text'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 30'
                    }
                  }
                ],
                linkId: '73e1e470-5c41-4644-b279-03f57bde036d',
                text: 'Chlamydia, gonorrhoea: <=30, first void urine (male and female) and/or endocervical swab or self-administered vaginal swab (female) or throat and anal swab (men who have sex with men [MSM])',
                type: 'text'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 49'
                    }
                  }
                ],
                linkId: '77847d34-103e-497d-a7d5-f62cbaf4f698',
                text: 'Syphilis (endemic areas, MSM, others at high risk)',
                type: 'text'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 30'
                    }
                  }
                ],
                linkId: '4aa47bda-d740-4294-9466-52b1be2ec15b',
                text: 'Trichomoniasis (<=30, male and female, remote areas and other endemic areas, first void urine and/or endocervical swab or self-administered vaginal swab)',
                type: 'text'
              },
              {
                linkId: 'b919de86-d81c-470d-8cb2-9caa4f8d3a42',
                text: 'Blood-borne virus screening: HBV if status not known/not recorded on file, HCV if risk factors, HIV if risk factors',
                type: 'text'
              },
              {
                linkId: '96a8d946-6078-4c85-9de8-3bf18d2c8150',
                text: 'Health priorities, actions and follow-up',
                type: 'text',
                repeats: false
              },
              {
                linkId: 'MarkComplete-14',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              },
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                valueString: 'Health Priorities Summary'
              }
            ],
            linkId: 'e2c778e2-83df-40d5-89ea-f0f91b666b04',
            text: 'Health Priorities, Actions And Follow-Up Summary',
            type: 'group',
            repeats: false,
            item: [
              {
                linkId: 'f948fb81-48e9-4bc6-bf81-8d778ac4375a',
                text: "The following information is a read-only collection of the 'Health priorities, actions and follow-up' sections entered in the previous tabs.",
                type: 'display'
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Current priorities calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryCurrentPriorities'
                    }
                  }
                ],
                linkId: '4b03d116-84ee-488c-b132-427472d21fcd',
                text: 'Current health/patient priorities',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Medical history calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryMedicalHistory'
                    }
                  }
                ],
                linkId: 'c848098c-85f3-487b-91af-01da4eba3aba',
                text: 'Medical history and current problems',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Regular medications calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryRegularMedications'
                    }
                  }
                ],
                linkId: '0c0a389e-c23a-4687-84d9-e00c5a258c7a',
                text: 'Regular medications',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Allergies/adverse reactions calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryAllergiesAdverseReactions'
                    }
                  }
                ],
                linkId: '34b7c4f3-c848-4dcb-ba9b-0b4c5ccd0785',
                text: 'Allergies/adverse reactions',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Family history Calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryFamilyHistory'
                    }
                  }
                ],
                linkId: 'f81c85c7-587e-47de-8b02-9c1eeee13949',
                text: 'Family history',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Social and emotional wellbeing calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummarySocialEmotionalWellbeing'
                    }
                  }
                ],
                linkId: 'a57d29d3-b875-47ac-b8ed-c95eaa6a027d',
                text: 'Social and emotional wellbeing',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Social history calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummarySocialHistory'
                    }
                  }
                ],
                linkId: 'ad9b85fc-24fe-495d-a980-941e2ad16533',
                text: 'Social history',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Home and family calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryHomeFamily'
                    }
                  }
                ],
                linkId: '622f0877-80ec-4b91-bb1c-e741e5657e4c',
                text: 'Home and family',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Learning and development calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryLearningDevelopment'
                    }
                  }
                ],
                linkId: '9a88bdf6-e97a-4c54-96ff-1dad9701b5ab',
                text: 'Learning and development',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age > 12).intersect(%age < 50)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Learning and work for adolescents and adults calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryLearningWorkAdults'
                    }
                  }
                ],
                linkId: 'aefbee8b-64fc-4cdc-9902-d6c3f50a2e18',
                text: 'Learning and work',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Learning and work calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryLearningWorkOlder'
                    }
                  }
                ],
                linkId: 'a96cce74-cda3-4b6b-adc4-1b7d73df2317',
                text: 'Work',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Mood calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryMood'
                    }
                  }
                ],
                linkId: '58bf5a0f-6c68-4d1f-b352-bfcba8e1e05e',
                text: 'Mood',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Memory and thinking calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryMemoryThinking'
                    }
                  }
                ],
                linkId: 'd963364a-e2d3-4382-8430-c47c19fc206c',
                text: 'Memory and thinking',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Chronic disease associated with ageing calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryChronicDiseaseAgeing'
                    }
                  }
                ],
                linkId: '1877223d-8cae-48af-8add-fd6b10b37209',
                text: 'Chronic disease associated with ageing',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age >= 50).intersect(%age <= 74)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Participation in screening programs calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryScreeningPrograms'
                    }
                  }
                ],
                linkId: 'b031bccf-5413-4c57-8e70-f464d24a6e6c',
                text: 'Participation in screening programs',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Healthy eating calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryHealthyEating'
                    }
                  }
                ],
                linkId: '6ef556cb-2a69-4d28-a6cf-b4866303a564',
                text: 'Healthy eating',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age < 50'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Physical activity and screen time calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryPhysicalActivityScreenTimeNotOlder'
                    }
                  }
                ],
                linkId: 'b7e32f62-a4e7-4419-a728-6addceefeb02',
                text: 'Physical activity and screen time',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Physical activity and screen time calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryPhysicalActivityScreenTimeOlder'
                    }
                  }
                ],
                linkId: 'f1c3d1ba-240c-4e68-8afc-62c50cc313d1',
                text: 'Physical activity',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Substance use, including tobacco calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummarySubstanceUse'
                    }
                  }
                ],
                linkId: 'c94f2749-4353-4f51-9c75-106f81c5b69f',
                text: 'Substance use, including tobacco',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Gambling calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryGambling'
                    }
                  }
                ],
                linkId: '931457d4-0de0-434c-88af-eb1b17746953',
                text: 'Gambling',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age > 12).intersect(%age <= 24)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Sexual health calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummarySexualHealthAdolescents'
                    }
                  }
                ],
                linkId: '797402ac-95de-4c0b-a04f-44b669755f7c',
                text: 'Sexual health',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age > 24).intersect(%age <= 49)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Sexual health calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummarySexualHealthAdults'
                    }
                  }
                ],
                linkId: 'e4df6f14-7a9c-445c-8cf5-3fc489db7307',
                text: 'Genitourinary and sexual health',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 50'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Sexual health calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummarySexualHealthOlder'
                    }
                  }
                ],
                linkId: '23e293c4-537f-46ca-90f9-c8dfb7630211',
                text: 'Genitourinary and sexual health',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Eye health calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryEyeHealth'
                    }
                  }
                ],
                linkId: '4b1bf353-a422-40fb-a6d3-42807ebf1a6a',
                text: 'Eye health',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Ear health and hearing calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryEarHealthHearing'
                    }
                  }
                ],
                linkId: 'c292557b-2798-4b45-854d-58c20ecf8233',
                text: 'Ear health and hearing',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Oral and dental health calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryOralDentalHealth'
                    }
                  }
                ],
                linkId: '93c33ba0-e4cc-4e9d-978b-49f57ce4a5eb',
                text: 'Oral and dental health',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 24'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Skin calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummarySkin'
                    }
                  }
                ],
                linkId: '0ccc2bce-899f-42b0-9100-05e6874372a3',
                text: 'Skin',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Immunisation calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryImmunisation'
                    }
                  }
                ],
                linkId: '8a33280b-19b9-4e0f-a26f-d9a0f95a7714',
                text: 'Immunisation',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Examination calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryExamination'
                    }
                  }
                ],
                linkId: 'a889034b-7942-460d-ada6-b728a9f57dc0',
                text: 'Examination',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 25'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Absolute cardiovascular risk calculation calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryAbsoluteCVDRisk'
                    }
                  }
                ],
                linkId: 'fd51cc3f-f53d-4a7d-a3a3-4a3b7232d4ee',
                text: 'Absolute cardiovascular risk calculation',
                type: 'text',
                repeats: false,
                readOnly: true
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >= 12'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
                    valueExpression: {
                      description: 'Investigations calculation',
                      language: 'text/fhirpath',
                      expression: '%HealthPrioritiesSummaryInvestigations'
                    }
                  }
                ],
                linkId: '84fa4cca-aff7-4357-8d92-bb827074dc6a',
                text: 'Investigations',
                type: 'text',
                repeats: false,
                readOnly: true
              }
            ]
          },
          {
            extension: [
              {
                url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                valueExpression: {
                  language: 'text/fhirpath',
                  expression: '%age.exists()'
                }
              }
            ],
            linkId: '16971bd2-5494-483d-9713-eda182c47f02',
            text: 'Finalising the health check',
            type: 'group',
            repeats: false,
            item: [
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-in-progress-31',
                text: 'In progress',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="In progress" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,\r\n\t\tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Im0xNS44NCAxMC4ybC0xLjAxIDEuMDFsLTIuMDctMi4wM2wxLjAxLTEuMDJjLjItLjIxLjU0LS4yMi43OCAwbDEuMjkgMS4yNWMuMjEuMjEuMjIuNTUgMCAuNzlNOCAxMy45MWw0LjE3LTQuMTlsMi4wNyAyLjA4bC00LjE2IDQuMkg4di0yLjA5TTEzIDJ2MmM0LjM5LjU0IDcuNSA0LjUzIDYuOTYgOC45MkE4LjAxNCA4LjAxNCAwIDAgMSAxMyAxOS44OHYyYzUuNS0uNiA5LjQ1LTUuNTQgOC44NS0xMS4wM0MyMS4zMyA2LjE5IDE3LjY2IDIuNSAxMyAybS0yIDBjLTEuOTYuMTgtMy44MS45NS01LjMzIDIuMkw3LjEgNS43NGMxLjEyLS45IDIuNDctMS40OCAzLjktMS42OHYtMk00LjI2IDUuNjdBOS44MSA5LjgxIDAgMCAwIDIuMDUgMTFoMmMuMTktMS40Mi43NS0yLjc3IDEuNjQtMy45TDQuMjYgNS42N00yLjA2IDEzYy4yIDEuOTYuOTcgMy44MSAyLjIxIDUuMzNsMS40Mi0xLjQzQTguMDAyIDguMDAyIDAgMCAxIDQuMDYgMTNoLTJtNSA1LjM3bC0xLjM5IDEuMzdBOS45OTQgOS45OTQgMCAwIDAgMTEgMjJ2LTJhOC4wMDIgOC4wMDIgMCAwIDEtMy45LTEuNjNoLS4wNFoiLz48L3N2Zz4=\' \r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-31',
                    operator: '=',
                    answerBoolean: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                              'https://smartforms.csiro.au/ig/CodeSystem/QuestionnaireItemControlExtended',
                          code: 'context-display'
                        }
                      ]
                    }
                  }
                ],
                linkId: 'CD-complete-31',
                text: 'Complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div title="Section completed" xmlns="http://www.w3.org/1999/xhtml">\r\n\t<div style="display: flex; flex-direction: row;">\r\n\t\t<img width=\'24\' height=\'24\' src=\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMyZTdkMzIiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtOCA4YTggOCAwIDAgMS04LThhOCA4IDAgMCAxIDgtOGMuNzYgMCAxLjUuMTEgMi4yLjMxbDEuNTctMS41N0E5LjgyMiA5LjgyMiAwIDAgMCAxMiAyQTEwIDEwIDAgMCAwIDIgMTJhMTAgMTAgMCAwIDAgMTAgMTBhMTAgMTAgMCAwIDAgMTAtMTBNNy45MSAxMC4wOEw2LjUgMTEuNUwxMSAxNkwyMSA2bC0xLjQxLTEuNDJMMTEgMTMuMTdsLTMuMDktMy4wOVoiLz48L3N2Zz4=\'\r\n\t\tstyle="align-self: center;"/>\r\n\t</div>\r\n</div>\r\n'
                    }
                  ]
                },
                type: 'display',
                enableWhen: [
                  {
                    question: 'MarkComplete-31',
                    operator: '=',
                    answerBoolean: true
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  }
                ],
                linkId: '30532ad8-3465-4bdd-97ed-ec5664f9d733',
                text: 'Patient priorities and goals: What does the parent/carer say are the important things that have come out of this health check?',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age <= 12).intersect(%age > 5)'
                    }
                  }
                ],
                linkId: '6aa0a113-4d33-4f6b-9899-fa249674075a',
                text: 'Patient priorities and goals: What does the parent/carer and child say are the important things that have come out of this health check?',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 12'
                    }
                  }
                ],
                linkId: '71c19d58-a8ae-43ba-8b96-463c108c75dc',
                text: 'Patient priorities and goals: What does the patient say are the important things that have come out of this health check?',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                    valueString: 'Other'
                  }
                ],
                linkId: 'd0e58402-a08a-49ca-b2ca-9f4bbdb89da0',
                text: 'Brief intervention: advice and information provided during health check',
                type: 'open-choice',
                repeats: true,
                answerOption: [
                  {
                    valueString: 'Sugary drinks'
                  },
                  {
                    valueString: 'Screen use'
                  },
                  {
                    valueString: 'Healthy eating, including breastfeeding'
                  },
                  {
                    valueString: 'Environmental exposure to harmful elements eg tobacco smoke'
                  },
                  {
                    valueString: 'Physical activity and exercise'
                  },
                  {
                    valueString: 'Sun protection'
                  },
                  {
                    valueString: 'Parenting advice'
                  },
                  {
                    valueString: 'Safe sleeping practices'
                  },
                  {
                    valueString: 'Developmental milestones - including language and hearing'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age <= 12).intersect(%age > 5)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                    valueString: 'Other'
                  }
                ],
                linkId: '0f70dec3-c1f2-4b36-b1f6-bd7f5743d5f8',
                text: 'Brief intervention: advice and information provided during health check',
                type: 'open-choice',
                repeats: true,
                answerOption: [
                  {
                    valueString: 'Healthy eating'
                  },
                  {
                    valueString: 'Screen use'
                  },
                  {
                    valueString: 'Sun protection'
                  },
                  {
                    valueString: 'Environmental exposure to harmful elements (e.g. tobacco smoke)'
                  },
                  {
                    valueString: 'Sugary drinks'
                  },
                  {
                    valueString: 'Physical activity and exercise'
                  },
                  {
                    valueString: 'Parenting advice'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age <= 24).intersect(%age > 12)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                    valueString: 'Other'
                  }
                ],
                linkId: 'eaed9770-95f4-4c6a-b06c-d573427a2616',
                text: 'Brief intervention: advice and information provided during health check',
                type: 'open-choice',
                repeats: true,
                answerOption: [
                  {
                    valueString: 'Healthy eating'
                  },
                  {
                    valueString: 'Screen use'
                  },
                  {
                    valueString: 'Physical activity and exercise'
                  },
                  {
                    valueString: 'Mental health and wellbeing'
                  },
                  {
                    valueString: 'Safety/risky behaviours'
                  },
                  {
                    valueString: 'Smoking cessation'
                  },
                  {
                    valueString: 'Substance use/harm minimisation'
                  },
                  {
                    valueString: 'Safe sex/contraception'
                  },
                  {
                    valueString: 'Care of teeth and gums'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '(%age <= 49).intersect(%age > 24)'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                    valueString: 'Other'
                  }
                ],
                linkId: '25f27e83-fcf0-49c8-86c1-e285e201a043',
                text: 'Brief intervention: advice and information provided during health check',
                type: 'open-choice',
                repeats: true,
                answerOption: [
                  {
                    valueString: 'Healthy eating'
                  },
                  {
                    valueString: 'Screen use'
                  },
                  {
                    valueString: 'Physical activity and exercise'
                  },
                  {
                    valueString: 'Mental health and wellbeing'
                  },
                  {
                    valueString: 'Carer support'
                  },
                  {
                    valueString: 'Safety/risky behaviours'
                  },
                  {
                    valueString: 'Smoking cessation'
                  },
                  {
                    valueString: 'Substance use/harm minimisation'
                  },
                  {
                    valueString: 'Safe sex/contraception'
                  },
                  {
                    valueString: 'Oral and dental health'
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age > 49'
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'check-box'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                    valueString: 'Other'
                  }
                ],
                linkId: '2657da9c-a27e-4939-af7a-08a19b9ab6f7',
                text: 'Brief intervention: advice and information provided during health check',
                type: 'open-choice',
                repeats: true,
                answerOption: [
                  {
                    valueString: 'Healthy eating'
                  },
                  {
                    valueString: 'Physical activity and exercise'
                  },
                  {
                    valueString: 'Mental health and wellbeing'
                  },
                  {
                    valueString: 'Carer support'
                  },
                  {
                    valueString: 'Smoking cessation'
                  },
                  {
                    valueString: 'Substance use/harm minimisation'
                  },
                  {
                    valueString: 'Social support and services'
                  },
                  {
                    valueString: 'Oral and dental health'
                  }
                ]
              },
              {
                linkId: 'afbadad6-bef9-4fad-b5f4-111f666ccf11',
                text: 'Care provided as part of the health check (eg immunisations, medication review, investigations requested)',
                type: 'text'
              },
              {
                linkId: '4b3015f6-5b0a-4dfa-9791-994e4059f921',
                text: 'Identified needs and plan (including new diagnoses)',
                type: 'text'
              },
              {
                linkId: '5760a1f9-d725-4b9e-b74d-50800615a689',
                text: 'Follow-up',
                type: 'group',
                repeats: false,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-display-category',
                              code: 'instructions'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'b4110a63-8547-4aa2-84c6-c1f64f0d24da',
                    text: 'Consider what follow-up appointments can be made at the time of the health check.',
                    type: 'display'
                  },
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory',
                        valueCodeableConcept: {
                          coding: [
                            {
                              system: 'http://hl7.org/fhir/questionnaire-display-category',
                              code: 'instructions'
                            }
                          ]
                        }
                      }
                    ],
                    linkId: 'c47cfd7e-0f15-4dd9-bd53-bb62851b677c',
                    text: 'Reminder: MBS follow up items for clients at risk of or with chronic disease are available to support follow-up of health checks',
                    type: 'display'
                  },
                  {
                    linkId: '1be25c55-2a2d-4b94-b826-bd17d9e35e92',
                    text: 'Referrals and appointments',
                    type: 'group',
                    repeats: true,
                    item: [
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '%age <= 5'
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'drop-down'
                                }
                              ]
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                            valueString: 'Other'
                          }
                        ],
                        linkId: '4044d0b4-94b2-4a89-b826-a14614298511',
                        text: 'Who',
                        type: 'open-choice',
                        repeats: false,
                        answerOption: [
                          {
                            valueString: 'GP follow-up'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Worker follow-up'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Practitioner follow-up'
                          },
                          {
                            valueString: 'Practice nurse follow-up'
                          },
                          {
                            valueString: 'Child health nurse'
                          },
                          {
                            valueString: 'Dentist'
                          },
                          {
                            valueString: 'Paediatrician'
                          },
                          {
                            valueString: 'Audiology'
                          },
                          {
                            valueString: 'Speech pathology'
                          },
                          {
                            valueString: 'Mental health'
                          },
                          {
                            valueString: 'Early intervention (development) services'
                          },
                          {
                            valueString: 'Parenting programs/support services'
                          }
                        ]
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '(%age <= 12).intersect(%age > 5)'
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'drop-down'
                                }
                              ]
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                            valueString: 'Other'
                          }
                        ],
                        linkId: 'f97f211a-ef2a-49a3-aef7-c4e9cd08aa2a',
                        text: 'Who',
                        type: 'open-choice',
                        repeats: false,
                        answerOption: [
                          {
                            valueString: 'GP follow-up'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Worker follow-up'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Practitioner follow-up'
                          },
                          {
                            valueString: 'Practice nurse follow-up'
                          },
                          {
                            valueString: 'Dentist'
                          },
                          {
                            valueString: 'Paediatrician'
                          },
                          {
                            valueString: 'Audiology'
                          },
                          {
                            valueString: 'Speech pathology'
                          },
                          {
                            valueString: 'Mental health'
                          },
                          {
                            valueString: 'Parenting programs/support services'
                          }
                        ]
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '(%age <= 24).intersect(%age > 12)'
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'drop-down'
                                }
                              ]
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                            valueString: 'Other'
                          }
                        ],
                        linkId: '07cfe077-ba93-4f93-b2a5-027023faa33b',
                        text: 'Who',
                        type: 'open-choice',
                        repeats: false,
                        answerOption: [
                          {
                            valueString: 'GP follow-up'
                          },
                          {
                            valueString: 'GP review of results of investigations'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Worker follow-up'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Practitioner follow-up'
                          },
                          {
                            valueString: 'Practice nurse follow-up'
                          },
                          {
                            valueString: 'Dentist'
                          },
                          {
                            valueString: 'Paediatrician'
                          },
                          {
                            valueString: 'Audiology'
                          },
                          {
                            valueString: 'Speech pathology'
                          },
                          {
                            valueString: 'Parenting programs/support services'
                          },
                          {
                            valueString: 'Social and emotional wellbeing/mental health'
                          }
                        ]
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '(%age <= 49).intersect(%age > 24)'
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'drop-down'
                                }
                              ]
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                            valueString: 'Other'
                          }
                        ],
                        linkId: 'a525c370-d8c3-4764-ab3a-bf62081725e0',
                        text: 'Who',
                        type: 'open-choice',
                        repeats: false,
                        answerOption: [
                          {
                            valueString: 'GP follow-up'
                          },
                          {
                            valueString: 'GP review of results of investigations'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Worker follow-up'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Practitioner follow-up'
                          },
                          {
                            valueString: 'Practice nurse follow-up'
                          },
                          {
                            valueString: 'Dentist'
                          },
                          {
                            valueString: 'Medication review'
                          },
                          {
                            valueString: 'Smoking cessation'
                          },
                          {
                            valueString: 'Audiology'
                          },
                          {
                            valueString: 'Dietician'
                          },
                          {
                            valueString: 'Physiotherapist or exercise program'
                          },
                          {
                            valueString: 'Parenting programs/support services'
                          },
                          {
                            valueString: 'Social and emotional wellbeing/mental health'
                          }
                        ]
                      },
                      {
                        extension: [
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                            valueExpression: {
                              language: 'text/fhirpath',
                              expression: '%age > 49'
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                            valueCodeableConcept: {
                              coding: [
                                {
                                  system: 'http://hl7.org/fhir/questionnaire-item-control',
                                  code: 'drop-down'
                                }
                              ]
                            }
                          },
                          {
                            url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel',
                            valueString: 'Other'
                          }
                        ],
                        linkId: 'd68d9693-48d3-4663-9dbb-dd3a7aec5278',
                        text: 'Who',
                        type: 'open-choice',
                        repeats: false,
                        answerOption: [
                          {
                            valueString: 'GP follow-up'
                          },
                          {
                            valueString: 'GP review of results of investigations'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Worker follow-up'
                          },
                          {
                            valueString:
                                'Aboriginal and/or Torres Strait Islander Health Practitioner follow-up'
                          },
                          {
                            valueString: 'Practice nurse follow-up'
                          },
                          {
                            valueString: 'Dentist'
                          },
                          {
                            valueString: 'Medication review'
                          },
                          {
                            valueString: 'Geriatrician'
                          },
                          {
                            valueString: 'Smoking cessation'
                          },
                          {
                            valueString: 'Audiologist'
                          },
                          {
                            valueString: 'Dietician'
                          },
                          {
                            valueString: 'Physiotherapist or exercise program'
                          },
                          {
                            valueString: 'Optometrist'
                          },
                          {
                            valueString: 'Podiatrist'
                          },
                          {
                            valueString: 'Social and emotional wellbeing/mental health'
                          },
                          {
                            valueString: 'Social support and services'
                          }
                        ]
                      },
                      {
                        linkId: '0ef84b09-ca34-44c2-96d1-fcbbea0bae66',
                        text: 'When',
                        type: 'date',
                        enableWhen: [
                          {
                            question: '4044d0b4-94b2-4a89-b826-a14614298511',
                            operator: 'exists',
                            answerBoolean: true
                          },
                          {
                            question: 'f97f211a-ef2a-49a3-aef7-c4e9cd08aa2a',
                            operator: 'exists',
                            answerBoolean: true
                          },
                          {
                            question: '07cfe077-ba93-4f93-b2a5-027023faa33b',
                            operator: 'exists',
                            answerBoolean: true
                          },
                          {
                            question: 'a525c370-d8c3-4764-ab3a-bf62081725e0',
                            operator: 'exists',
                            answerBoolean: true
                          },
                          {
                            question: 'd68d9693-48d3-4663-9dbb-dd3a7aec5278',
                            operator: 'exists',
                            answerBoolean: true
                          }
                        ],
                        enableBehavior: 'any',
                        repeats: false
                      }
                    ]
                  }
                ]
              },
              {
                linkId: 'a400fe69-c99f-47ed-bee1-083c3e4be467',
                text: 'Recalls entered (eg clinical review, investigations, influenza vaccination, asthma plan/cycle of care, diabetes cycle of care, care plan review, cervical screening, investigations)',
                type: 'group',
                repeats: true,
                item: [
                  {
                    extension: [
                      {
                        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-hidden',
                        valueBoolean: true
                      },
                      {
                        url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression',
                        valueExpression: {
                          language: 'text/fhirpath',
                          expression: '%patient.id'
                        }
                      }
                    ],
                    linkId: '40e3933d-77bb-40f3-8609-0c38ebb4421e',
                    definition:
                        'http://aehrc.com/fhir/StructureDefinition/AUPrimaryCareFollowUp#CarePlan.subject.reference',
                    text: 'recall-subject',
                    type: 'string'
                  },
                  {
                    linkId: 'fece6a3c-f8f1-4592-a166-5ea5a3c60c8e',
                    definition:
                        'http://aehrc.com/fhir/StructureDefinition/AUPrimaryCareFollowUp#CarePlan.title',
                    text: 'Recall',
                    type: 'text',
                    repeats: false
                  }
                ]
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age <= 5'
                    }
                  }
                ],
                linkId: '5a0c98f8-5349-4045-9ba0-27a4f35630b9',
                text: 'Parent/carer actions',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '((%age <= 12).intersect(%age > 5))'
                    }
                  }
                ],
                linkId: 'cde03bf0-182a-4998-a37e-7b3f22786617',
                text: 'Parent/patient actions',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression',
                    valueExpression: {
                      language: 'text/fhirpath',
                      expression: '%age >12'
                    }
                  }
                ],
                linkId: '51ff0c15-312a-45ce-a25a-6c6a4bf0e17e',
                text: 'Patient actions',
                type: 'text',
                repeats: false
              },
              {
                extension: [
                  {
                    url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
                    valueCodeableConcept: {
                      coding: [
                        {
                          system: 'http://hl7.org/fhir/questionnaire-item-control',
                          code: 'radio-button'
                        }
                      ]
                    }
                  },
                  {
                    url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText',
                    valueString: 'Copy of health check'
                  }
                ],
                linkId: '8176151f-6d86-45eb-91b1-12458d75a181',
                text: 'A copy of this health check has been offerered - including details of follow-up and future appointments',
                type: 'choice',
                repeats: false,
                answerOption: [
                  {
                    valueString: 'Yes, copy taken'
                  },
                  {
                    valueString: 'Yes, but declined'
                  },
                  {
                    valueString: 'Not offered. Plan to follow up and offer at a later date'
                  }
                ]
              },
              {
                linkId: 'MarkComplete-31',
                text: 'Mark section as complete',
                _text: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/rendering-xhtml',
                      valueString:
                          '<div xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n    <style type="text/css">\r\n        .alert {\r\n            padding: 0.875rem;\r\n            margin-bottom: 1rem;\r\n            font-size: 0.875rem;\r\n            color: #2E7D32;\r\n            border-radius: 0.5rem;\r\n            background-color: #d5e5d6;\r\n            font-weight: 700;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class="alert">Mark section as complete</div>\r\n</body>\r\n</div>'
                    }
                  ]
                },
                type: 'boolean',
                repeats: false
              }
            ]
          }
        ]
      }
    ]
  };